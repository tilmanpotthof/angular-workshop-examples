module.exports = (function() {
  'use strict';

  var config = require('./config/config.js');
  var _ = require('underscore');

  var watch = {
    options: {
      livereload: true,
      interval: 200
    },
    html: {
      files: [
        'example-pages/*'
      ]
    },
    docs: {
      files: [
        'src/app/**/*.js'
      ],
      tasks: [
        'ngdocs'
      ]
    },
    assets: {
      files: [
        'src/assets/**/*', '!src/assets/stylesheets/**/*'
      ],
      tasks: [
        'jshint:extraScripts',
        'copy:assets'
      ]
    }
  };

  var moduleWatchTasks = {};

  _.each(config.modules, function (modulePaths, moduleName) {
    moduleWatchTasks['js-' + moduleName] = {
      files: modulePaths.src.concat(modulePaths.templates.dest),
      tasks: [
        'jshint',
        'concat',
        'karma:' + moduleName
      ]
    };
    moduleWatchTasks['tests-' + moduleName] = {
      files: modulePaths.spec,
      tasks: [
        'karma:' + moduleName
      ]
    };
    moduleWatchTasks['templates-' + moduleName] = {
      files: modulePaths.templates.src,
      tasks: [
        'ngtemplates:' + moduleName
      ]
    };
  });

  return _.extend(watch, moduleWatchTasks);
})();
