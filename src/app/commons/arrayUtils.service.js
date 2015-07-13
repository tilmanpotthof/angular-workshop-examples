angular.module('commons').factory('arrayUtils', function() {
  'use strict';

  return {
    remove: function (element, array, objectEquality) {
      var index = -1;
      if (!objectEquality) {
        index = array.indexOf(element);
      } else {
        array.some(function(arrayElement, arrayIndex) {
          if (angular.equals(element, arrayElement)) {
            index = arrayIndex;
            return true;
          }
        });
      }
      if (index >= 0) {
        array.splice(index, 1);
      }
      return array;
    }
  };
});
