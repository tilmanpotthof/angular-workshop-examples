module.exports = function() {
  'use strict';

  var config = require('./config/config.js');

  return {
    app: {
      src: [
        'src/app/**/*.module.js',
        'src/app/**/*.controller.js',
        'src/app/**/*.service.js',
        'src/app/**/*.filter.js',
        'src/app/**/*.directive.js',
        'src/app/**/*.ngLocale.js',
        '!src/app/**/*.spec.js',
        'generated/.tmp/templates/*.js'
      ],
      dest: 'generated/dist/js/app.js'
    },
    vendor: {
      src: config.npmComponents,
      dest: 'generated/dist/js/vendor.js'
    }
  };
};
