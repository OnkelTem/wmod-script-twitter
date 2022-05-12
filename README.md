# Web App Modification: Twitter

MITM stands for [man-in-the-middle](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) cyberattack.
It's also a great opportunity to modify almost any existing web application in a big scale.

But what about browser extensions, you say, ain't they created for that purpose?

Well, they are. But after years of browsers development, they have been finally rendered pretty limited
in their capabilities. They're executed in a separate process and they can't effectively interfere
with a web app, they can't even read what the app receives via network. But, obviously, we could
perfectly achieve that by _injecting_ a script into the page itself.

This experimental project is an example of what can be done using an HTTP/HTTPS proxy to modify
an existing web application - https://twitter.com.

## What has been modded so far

My goal was to add some cool modifications to the desktop Twitter website. Particularly, I was not satisfied
with how it shows tweets in the feed:

![Pasted image 20220511110037](https://user-images.githubusercontent.com/114060/167895950-869d71fd-66e7-448f-8566-d08af572fe92.png)

As you see, there is no any info about our connection to the author, nor does it show the number
of their followers. Here is how it looks now, after applying the mod:

![Pasted image 20220511105630](https://user-images.githubusercontent.com/114060/167896028-316c078c-56fc-4ba9-95fd-8e9803d1d236.png)

A short video to see it in action:

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/9gpQZZbrGPk/0.jpg)](https://www.youtube.com/watch?v=9gpQZZbrGPk)

## How to use it

### Install

```
$ git clone <repo>
$ cd wmod-twitter
$ npm i
$ npm run proxy
```

Upon startup the proxy script will create two files in the local `cert/` directory: `cert.pem` and `key.pem`.

### Configure the browser

#### Firefox

Run your browser, open the `about:preferences` page and add the CA certificate from `cert/cert.pem`:

1. Type `cert` in the search box and click the **Vew Certificates...** button.
2. Switch to **Authorities** tab and import `cert/cert.pem` certificate ticking _Trust this CA to identify websites_ checkbox on.

and enable the proxy:

1. Type `proxy` in the search box and click the **Settings...** button.
2. On the **Connection Settings** page select _Manual proxy configuration_ and set **HTTP Proxy** to `127.0.0.1` and **Port** to `8000`.

#### Chrome

_TODO: provide an example how to prepare an appropriate certificate._

### Use

Visit http://twitter.com and check the home page.

## The architecture

_TODO: finish this section._
