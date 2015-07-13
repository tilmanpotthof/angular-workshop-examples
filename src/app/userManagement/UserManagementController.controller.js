angular.module('userManagement').controller('UserManagementController', function($scope, $log, randomUserApi, meals) {
  'use strict';

  $scope.userService = randomUserApi;

  $scope.filter = {};

  function containsWord(haystack, needle) {
    return haystack.indexOf(needle) >= 0;
  }

  $scope.userFilter = function(user) {
    var filter = $scope.filter;

    if (filter.name && !(containsWord(user.firstname, filter.name) || containsWord(user.lastname, filter.name))) {
      return false;
    }
    if (filter.gender && filter.gender !== user.gender) {
      return false;
    }
    return true;
  };

  $scope.genders = [
    {
      label: '-'
    },
    {
      label: 'Mann',
      key: 'male'
    },
    {
      label: 'Frau',
      key: 'female'
    }
  ];

  function initUser() {
    $scope.newUser = {};
  }

  initUser();

  $scope.meals = meals;

  $scope.addUser = function(user) {
    randomUserApi.addUser(user);
    initUser();
  };
})
;
