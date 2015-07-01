module.exports = (function() {
  'use strict';

  var config = require('./config/config.js');
  var _ = require('underscore');

  var karma = {
    all: {
      options: {
        configFile: 'karma.conf.js',
        files: config.npmComponents
          .concat(config.npmDevComponents)
          .concat(
          config.all,
          config.allSpec
        )
      }
    },
    dist: {
      options: {
        configFile: 'karma.conf.js',
        files: [
          'generated/dist/js/vendor.js',
          'generated/dist/js/app.js',
          'node_modules/angular-mocks/angular-mocks.js'
        ].concat(
          config.allSpec
        ),
        preprocessors: {
          'generated/dist/js/app.js': 'coverage'
        }
      }
    }
  };

  var moduleKarmaTasks = {};

  _.each(config.modules, function(modulePaths, moduleName) {
    moduleKarmaTasks[moduleName] = {
      options: {
        configFile: 'karma.conf.js',
        coverageReporter: {
          reporters: [
            {type: 'text', dir: 'generated/reports/coverage'},
            {type: 'lcov', dir: 'generated/reports/coverage/lcov/' + moduleName}
          ]
        },
        files: config.npmComponents
          .concat(config.npmDevComponents)
          .concat(
          modulePaths.src,
          modulePaths.templates.dest,
          _.flatten(modulePaths.dependencies.map(function(dependency) {
            return config.modules[dependency].src.concat(config.modules[dependency].templates.dest);
          })),
          modulePaths.spec
        )
      }
    };
  });

  return _.extend(karma, moduleKarmaTasks);
})();
