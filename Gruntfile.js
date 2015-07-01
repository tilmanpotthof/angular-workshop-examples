module.exports = function (grunt) {
  'use strict';

  var path = require('path');
  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    // path to task.js files, defaults to grunt dir
    configPath: path.join(process.cwd(), 'grunt_modules')
  });

  grunt.registerTask('build', [
    'jshint',
    'clean',
    'ngtemplates',
    'concat',
    'ngdocs'
  ]);

  grunt.registerTask('dev', [
    'test',
    'build',
    'apimocker',
    'configureProxies:server',
    'connect:server',
    'watch'
  ]);

  grunt.registerTask('dev-docs', [
    'ngdocs',
    'connect:docs',
    'watch:docs'
  ]);

  grunt.registerTask('test', [
    'ngtemplates',
    'karma:all'
  ]);

  grunt.registerTask('default', [
    'deps-ok',
    'test',
    'build',
    'karma:dist'
  ]);
};
