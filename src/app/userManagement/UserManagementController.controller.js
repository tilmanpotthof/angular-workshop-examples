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
});
