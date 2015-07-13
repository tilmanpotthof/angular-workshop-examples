angular.module('userManagement', ['commons', 'ngRoute']).config(function($routeProvider) {
  'use strict';

  $routeProvider.when('/user-management', {
    templateUrl: 'app/userManagement/userManagement.html'
  }).when('/user-detail-page/:guid', {
    template: '<div user-detail-page ></div>'
  }).otherwise({
    redirectTo: '/user-management'
  });
}).run(function ($rootScope) {
  'use strict';

  $rootScope.DEBUG = false;
});
