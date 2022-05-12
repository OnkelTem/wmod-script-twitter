"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
module.exports = {
  name: "wmod-script-twitter",
  version: "0.0.1",
  description: "Website Modification Script: Twitter",
  homepage: "https://github.com/OnkelTem/wmod-twitter",
  scripts: [{
    name: 'default',
    files: [{
      path: 'wmod_twitter.js',
      inject: true
    }, {
      path: 'wmod_twitter.js.map',
      inject: false
    }]
  }],
  rules: [{
    hostname: 'twitter.com',
    path: /^\/(home|explore|search|[^\/]+?\/status\/\d+$)/,
    action: {
      scripts: ['default']
    }
  }, {
    hostname: 'ton.local.twitter.com',
    action: {
      response: 404
    }
  }]
};
