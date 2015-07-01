module.exports = function() {
  'use strict';

  var config = require('./config/config.js');
  var _ = require('underscore');

  var concatOptions = {
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

  _.each(config.modules, function(modulePaths, moduleName) {
    concatOptions[moduleName] = {
      src: modulePaths.src
        .concat(
        modulePaths.templates.dest,
        _.flatten(modulePaths.dependencies.map(function(dependency) {
          return config.modules[dependency].src.concat(config.modules[dependency].templates.dest);
        }))
      ),
      dest: modulePaths.dest

    };
  });

  return concatOptions;
};
