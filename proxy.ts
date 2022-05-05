import { F_OK } from 'constants';
import fs from 'fs';
import { basename, dirname } from 'path';
import * as mockttp from 'mockttp';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs';

const parse = yargs(hideBin(process.argv))
  .demandCommand()
  .command('$0 <port> <hostname> <path> <script>', 'Run proxy on port PORT and inject SCRIPT into URL pages', (argv) =>
    argv
      .positional('port', {
        describe: 'Proxy port number',
        type: 'number',
        demandOption: true,
      })
      .positional('hostname', {
        describe: 'Hostname for injection',
        type: 'string',
        demandOption: true,
      })
      .positional('path', {
        describe: 'Path for injection',
        type: 'string',
        demandOption: true,
      })
      .positional('script', {
        describe: 'Script to inject',
        type: 'string',
        demandOption: true,
      }),
  );

(async () => {
  const argv = await parse.argv;
  await main(argv.port, argv.hostname, argv.path, argv.script);
})();

async function main(port: number, hostname: string, path: string, script: string) {
  const keyPemPath = 'cert/key.pem';
  const certPemPath = 'cert/cert.pem';

  if (!(await fileExists(keyPemPath)) || !(await fileExists(certPemPath))) {
    const { key, cert } = await mockttp.generateCACertificate();
    await saveFile(keyPemPath, key);
    await saveFile(certPemPath, cert);
  }
  const key = await readFile(keyPemPath);
  const cert = await readFile(certPemPath);

  const server = mockttp.getLocal({ https: { key, cert } });

  const scriptSitePath = `/${basename(script)}`;

  // Serving our injected script
  server
    .forGet(scriptSitePath)
    .forHostname(hostname)
    .thenCallback(() => {
      // eslint-disable-next-line
      console.log(`Fetching ${script}`);
      return {
        statusCode: 200,
        body: fs.readFileSync(script),
      };
    });

  // Serving our injected script source map, if any
  if (await fileExists(script + '.map')) {
    server
      .forGet(scriptSitePath + '.map')
      .forHostname(hostname)
      .thenCallback(() => {
        // eslint-disable-next-line
        console.log(`Fetching ${script + '.map'}`);
        return {
          statusCode: 200,
          body: fs.readFileSync(script + '.map'),
        };
      });
  }

  const pathRegexp = new RegExp(path);

  server
    .forGet(pathRegexp)
    .forHostname(hostname)
    .thenPassThrough({
      beforeResponse: async (res) => {
        let bodyText = await res.body.getText();
        if (bodyText != null) {
          let isReplaced = false;
          bodyText = bodyText.replace(/<body[^>]*>/, (match) => {
            isReplaced = true;
            // eslint-disable-next-line
            console.log(`Injecting script "${scriptSitePath}"`);
            return match + `<script src="${scriptSitePath}"></script>`;
          });
          if (!isReplaced) {
            // eslint-disable-next-line
            console.log('Cannot find the pattern for script injection');
          }
        }
        return { body: bodyText };
      },
    });
  // eslint-disable-next-line
  console.log(`Ready for injection into "${pathRegexp}" pages of "${hostname}"`);

  // Hide other errors
  // server.on('handle-error', (e) => {
  //   console.log(e);
  // });

  server.forUnmatchedRequest().thenPassThrough({});

  await server.start(port);

  const caFingerprint = mockttp.generateSPKIFingerprint(cert);
  // Print out the server details for manual configuration:
  // eslint-disable-next-line
  console.log(`Server running on port ${server.port}`);
  // eslint-disable-next-line
  console.log(`CA cert fingerprint ${caFingerprint}`);
}

async function fileExists(path: string) {
  return new Promise((r) => {
    fs.access(path, F_OK, (err) => {
      if (err) {
        r(false);
      }
      r(true);
    });
  });
}

async function saveFile(path: string, data: string) {
  const dir = dirname(path);
  if (dir !== '') {
    fs.mkdirSync(dir, { recursive: true });
  }
  return new Promise<null>((r) => {
    fs.writeFile(path, data, function (err) {
      if (err) throw err;
      // eslint-disable-next-line
      console.log(`Saved: ${path}`);
      r(null);
    });
  });
}

async function readFile(path: string) {
  return new Promise<string>((r) => {
    fs.readFile(path, function (err, data) {
      if (err) throw err;
      r(data.toString());
    });
  });
}
