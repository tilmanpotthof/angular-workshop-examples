angular.module('userManagement').directive('userDetailPage', function (meals) {
  'use strict';

  return {
    restrict: 'A',
    templateUrl: 'app/userManagement/userDetailPage.html',
    controller: function ($scope, $routeParams, randomUserApi) {
      var guid = $routeParams.guid;


      $scope.user = function () {
        return randomUserApi.getUserByGuid(guid);
      };

      $scope.isEditing = function() {
        return $scope.userToEdit !== undefined;
      };

      $scope.editOrSave = function (user) {
        if ($scope.userToEdit) {
          randomUserApi.updateUser(user);
          $scope.userToEdit = undefined;
        } else {
          $scope.userToEdit = $scope.user();
        }
      };

    }
  };
});
