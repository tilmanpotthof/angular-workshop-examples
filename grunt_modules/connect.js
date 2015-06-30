module.exports = {
	server: {
    options: {
      open: 'http://localhost:8000/example-pages/',
      middleware: function (connect, options) {
        'use strict';

        var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
        return [
          // Include the proxy first
          proxy,
          // Serve static files.
          connect.static(options.base[0]),
          // Make empty directories browsable.
          connect.directory(options.base[0])
        ];
      }
    },
    proxies: [
      {
        context: '/api',
        host: '127.0.0.1',
        port: 8001,
        rewrite: {
          '/api' : '/'
        }
      }
    ]
  },
  docs: {
    options: {
      open: 'http://localhost:8000/generated/docs/#'
    }
  }
};
