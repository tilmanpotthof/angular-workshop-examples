angular.module('userManagement').factory('randomUserApi', function ($http) {
  'use strict';

  var privateUsersByGUID = {};

  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  var randomUserApi = {
    addUser: function (user) {
      if (user.guid) {
        throw new Error('User has already a guid. Use updateUser() instead');
      }
      var newGuid = guid();
      user.guid = newGuid;
      privateUsersByGUID[newGuid] = user;
    },
    updateUser: function (user) {
      var guid = user.guid;
      if (!guid) {
        throw new Error('User no guid. Use addUser() instead');
      }
      if (!privateUsersByGUID[guid]) {
        throw new Error('No user with guid "' + guid + '" exists. Use addUser() instead');
      }
      privateUsersByGUID[guid] = user;
    },
    removeUser: function (user) {
      delete privateUsersByGUID[user.guid];
    },
    getUserByGuid: function (guid) {
      return privateUsersByGUID[guid];
    },
    getUsers: function () {
      return Object.keys(privateUsersByGUID).map(function (key) {
        return privateUsersByGUID[key];
      });
    },
    reloadUsers: function (userCount) {
      $http({
        url: 'http://api.randomuser.me/',
        params: {
          results: userCount
        }
      }).success(function (response) {
        response.results.forEach(function (result) {
          var user = result.user;
          randomUserApi.addUser( {
            firstname: user.name.first,
            lastname: user.name.last,
            gender: user.gender
          });
        });
      });
    }
  };
  randomUserApi.reloadUsers(10);

  return randomUserApi;

});
