angular.module('userManagement').controller('UserManagementController', function ($scope, $log, randomUserApi, meals) {
  'use strict';

  $scope.userCount = 5;

  $scope.userService = randomUserApi;

  randomUserApi.reloadUsers($scope.userCount);

  $scope.users = randomUserApi.getUsers;

  $scope.$watch('userCount', randomUserApi.reloadUsers);



  function initUser() {
    $scope.user = {};
  }

  initUser();

  $scope.users = [];

  $scope.meals = meals;

  $scope.addUser = function (user) {
    randomUserApi.addUser(user);
    initUser();
  };

  $scope.getPropertiesString = function (user) {
    var properties = [];
    if (user.bremenFan) {
      properties.push('Bremen-Fan');
    }
    if (user.vegetarier) {
      properties.push('Vegetarier');
    }
    if (user.macUser) {
      properties.push('Mac-User');
    }
    return properties.join(', ');
  };
});
