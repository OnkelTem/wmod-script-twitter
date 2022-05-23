import { Manifest } from 'wmod-proxy';

export = {
  name: PACKAGE_NAME,
  version: PACKAGE_VERSION,
  description: PACKAGE_DESCRIPTION,
  homepage: PACKAGE_HOMEPAGE,
  scripts: [
    {
      name: 'default',
      files: [
        {
          path: 'wmod_twitter.js',
          inject: true,
        },
        {
          path: 'wmod_twitter.js.map',
          inject: false,
        },
      ],
    },
  ],
  rules: [
    {
      hostname: 'twitter.com',
      path: /^\/(home|explore|search|[^\/]+?\/status\/\d+$|[^\/]+?\/following$)/,
      action: {
        scripts: ['default'],
      },
    },
    {
      hostname: 'ton.local.twitter.com',
      action: {
        response: 404,
      },
    },
  ],
} as Manifest;
