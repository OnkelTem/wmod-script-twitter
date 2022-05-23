# Website Modification Script: Twitter

A script that adds some details to the tweets on the https://twitter.com website. It must be injected using a man-in-the-middle
proxy like [Website Modification Proxy](https://github.com/OnkelTem/wmod-script-twitter) or similar.

## What has been modded so far

My goal was to add some cool modifications to the desktop Twitter website. Particularly, I was not satisfied
with how it shows tweets in the feed:

![Pasted image 20220511110037](https://user-images.githubusercontent.com/114060/167895950-869d71fd-66e7-448f-8566-d08af572fe92.png)

As you see, there is no info about our connection to the author, nor does it show the number of their followers. Here is how it looks now, after applying the mod:

![Pasted image 20220511105630](https://user-images.githubusercontent.com/114060/167896028-316c078c-56fc-4ba9-95fd-8e9803d1d236.png)

A short video to see it in action:

[![youtube video](https://img.youtube.com/vi/9gpQZZbrGPk/0.jpg)](https://www.youtube.com/watch?v=9gpQZZbrGPk)

## How to use it

### Install

```
$ git clone <repo>
$ cd wmod-twitter
$ npm i
```

### Build

To use this wmod you need to build it:

```
$ npm run build
$ npm run proxy
```

The first command builds the wmod into the `js/` directory. The second runs [wmod-proxy](https://github.com/OnkelTem/wmod-twitter)
against `js/` directory and starts injecting code.

Also, upon startup, the proxy script will create two files in the local `cert/` directory: `cert.pem` and `key.pem`.
**You need to install `cert/cert.pem` into your browser.**

### Configuring the browser

#### Firefox

Open the `about:preferences` page and add the CA certificate from `cert/cert.pem`:

1. Type `cert` in the search box and click the **View Certificates...** button.
2. Switch to **Authorities** tab and import `cert/cert.pem` certificate ticking _Trust this CA to identify websites_ checkbox on.

and enable the proxy:

1. Type `proxy` in the search box and click the **Settings...** button.
2. On the **Connection Settings** page select _Manual proxy configuration_ and set **HTTP Proxy** to `127.0.0.1` and **Port** to `8000`.

#### Chrome

_TODO: provide an example of how to prepare an appropriate certificate._

### Use

Visit http://twitter.com and check the home page. You should see a small "WM" icon at the top of the affect pages.

![image](https://user-images.githubusercontent.com/114060/169668987-3c84aabb-ddb2-4363-82b5-0153299a0384.png)

## Development

To run the wmod in development mode run:

```
$ npm run dev
$ npm run proxy
```

The first command builds the development version into `js/` directory and rebuilds it automatically upon
source code modification. The second runs [wmod-proxy](https://github.com/OnkelTem/wmod-twitter)
against `js/` directory and starts injecting code. It's also watching the `js/` directory and restarts
the proxy when the code gets rebuilt.

## The architecture

_TODO: finish this section._
