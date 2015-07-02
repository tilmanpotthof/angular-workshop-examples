describe('service:arrayUtils', function () {
  'use strict';

  var arrayUtils;

  beforeEach(module('commons'));

  beforeEach(inject(function (_arrayUtils_) {
    arrayUtils = _arrayUtils_;
  }));

  it('exists', function () {
    expect(arrayUtils).toBeDefined();
  });

  describe('remove', function () {

    it('is a function', function () {
      expect(angular.isFunction(arrayUtils.remove)).toBe(true);
    });

    it('removes an equal number from the array', inject(function (arrayUtils) {
      expect(arrayUtils.remove(3, [5, 4, 3, 2, 1, 0])).toEqual([5, 4, 2, 1, 0]);
      expect(arrayUtils.remove(6, [5, 4, 3, 2, 1, 0])).toEqual([5, 4, 3, 2, 1, 0]);
      expect(arrayUtils.remove(5, [5, 5, 5])).toEqual([5, 5]);
      expect(arrayUtils.remove('5', [5, '5'])).toEqual([5]);
      expect(arrayUtils.remove('a', ['aaa', 'aa', 'a'])).toEqual(['aaa', 'aa']);
    }));

    it('removes an equal string from', inject(function (arrayUtils) {

    }));

    it('should remove an identical object from the array', function () {
      var a = {};
      var b = {};
      var c = {};
    });

    it('removes an equal object from the array', function () {
      var a1 = {x: 0};
      var a2 = {x: 0};
      var b = {x: 1};

    });

    it('removes an equal complex object from the array', function () {
      var a1 = {x: 0, a: [1, 2, {}, 3, {bla: 10}]};
      var a2 = {x: 0, a: [1, 2, {}, 3, {bla: 10}]};
      var b = {x: 0, a: [1, 2, {}, 3, {bla: 77}]};

    });
  });
});
