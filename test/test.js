var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Foo', function() {
  describe('#foo()', function() {
    it('should return back true if passed baz', function() {
      var foo = require('../foo/foo');
      assert.equal(foo('baz'), true);
    });

    it('should return back false if passed something other than baz', function() {
      var foo = require('../foo/foo');
      assert.equal(foo('foo'), false);
      assert.equal(foo('bar'), false);
    });
  })
});
