angular.module('userManagement').directive('userForm', function (meals) {
  'use strict';

  return {
    restrict: 'A',
    templateUrl: 'app/userManagement/userFormFields.html',
    scope: {
      user: '=userForm',
      headline: '@'
    },
    controller: function ($scope) {
      $scope.meals = meals;
    }
  };
});
