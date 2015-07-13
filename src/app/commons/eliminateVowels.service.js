angular.module('commons').filter('eliminateVowels', function () {
  'use strict';

  return function (value, disable) {
    if (angular.isString(value) && !disable) {
      return value.replace(/[AEIOUaeiou]/g, '');
    } else {
      return value;
    }
  };
});
