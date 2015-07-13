angular.module('userManagement').filter('displayUserProperties', function () {
  'use strict';

  var propertieNamesAndLabels = {
    bremenFan: 'Bremen-Fan',
    vegetarier: 'Vegetarier',
    macUser: 'Mac_user'
  };

  return function (user) {
    if (!user || !user.firstname || !user.lastname) {
      // do nothing if not a user
      return user;
    } else {
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
    }
  };
});
