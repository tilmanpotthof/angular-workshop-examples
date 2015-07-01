module.exports = (function() {
  'use strict';

  var _ = require('underscore');

  var CONSTANTS = {
    MODULE_SRC: _.template('src/app/<%= moduleName %>/**/*.module.js'),
    DEST: _.template('generated/dist/js/<%= moduleName %>.js'),
    SRC_WITHOUT_SPEC: _.template('src/app/<%= moduleName %>/**/!(*.spec).js'),
    TEST_SPEC: _.template('src/app/<%= moduleName %>/**/*.spec?(.config).js'),
    TEMPLATE_SRC: _.template('src/app/<%= moduleName %>/**/*.html'),
    TEMPLATE_DEST: _.template('generated/.tmp/templates/templates-<%= moduleName %>.js')
  };

  function BuildModule(moduleName) {
    this.moduleName = moduleName;
    this.src = [CONSTANTS.MODULE_SRC(this), CONSTANTS.SRC_WITHOUT_SPEC(this)];
    this.dest = CONSTANTS.DEST(this);
    this.spec = [CONSTANTS.TEST_SPEC(this)];
    this.dependencies = [];
  }

  _.extend(BuildModule.prototype, {
    withTemplates: function () {
      this.templates = {
        src: CONSTANTS.TEMPLATE_SRC(this),
        dest: CONSTANTS.TEMPLATE_DEST(this)
      }
    },
    withDependencies: function (dependencies) {
      this.dependencies = dependencies;
    }
  });

  var config = {
    'npmComponents': [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/angular/angular.min.js',
      'node_modules/angular-route/angular-route.min.js',
      'node_modules/underscore/underscore-min.js'
    ],
    'npmDevComponents': [
      'node_modules/angular-mocks/angular-mocks.js'
    ],
    'all': [
      'src/app/**/*.module.js',
      'src/app/**/!(*.spec).js',
      'generated/.tmp/templates/*.js'
    ],
    'allSpec': [
      'src/app/**/*.spec?(.config).js'
    ],

    modules: {
    }
  };

  function addModule(moduleName) {
    var module = new BuildModule(moduleName);
    config.modules[moduleName] = module;
    return module;
  }

  addModule('helloWorld').withTemplates();

  return config;
})();
