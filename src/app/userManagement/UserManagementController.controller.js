angular.module('userManagement').controller('UserManagementController', function ($scope, $log, $http) {
  'use strict';

  console.log($log, $http);

  $scope.userCount = 5;

  function loadUsers() {
    $http({
      url: 'http://api.randomuser.me/',
      params: {
        results: $scope.userCount
      }
    }).success(function (response) {
      $scope.users = response.results.map(function (result) {
        return result.user;
      });
    });
  }

  $scope.$watch('userCount', loadUsers);

  function initUser() {
    $scope.user = {};
  }

  initUser();

  $scope.users = [];

  $scope.meals = [{
    id: 1,
    name: 'Pizza',
    calories: 258
  },{
    id: 2,
    name: 'Pommes',
    calories: 299
  },{
    id: 3,
    name: 'Kartoffeln',
    calories: 89
  }];

  $scope.addUser = function (user) {
    $scope.users.push(user);
    initUser();
  };
  $scope.removeUser = function (user) {
    arrayRemove($scope.users, user);
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
