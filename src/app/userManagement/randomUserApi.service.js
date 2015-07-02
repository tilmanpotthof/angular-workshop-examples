angular.module('userManagement').factory('randomUserApi', function ($http) {
  'use strict';

  var privateUserList = [];

  var randomUserApi = {
    addUser: function (user) {
      privateUserList.push(user);
    },
    removeUser: function (user) {
      var index = privateUserList.indexOf(user);
      privateUserList.splice(index, 1);
    },
    getUsers: function () {
      return [].concat(privateUserList);
    },
    reloadUsers: function (userCount) {
      $http({
        url: 'http://api.randomuser.me/',
        params: {
          results: userCount
        }
      }).success(function (response) {
        privateUserList = response.results.map(function (result) {
          return result.user;
        });
      });
    }
  };

  return randomUserApi;

});
