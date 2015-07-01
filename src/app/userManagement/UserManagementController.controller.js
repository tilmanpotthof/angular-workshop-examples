angular.module('userManagement').controller('UserManagementController', function ($scope) {
  'use strict';

  function arrayRemove(array, element) {
    var index = array.indexOf(element);
    array.splice(index, 1);
  }

  function initUser() {
    $scope.user = {};
  }

  initUser();

  var predefinedUser = {
    vorname: 'Tilman',
    nachname: 'Potthof'
  };

  $scope.users = [predefinedUser];

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
