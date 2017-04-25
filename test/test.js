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

describe('IsValidDate', function() {
  describe('#isValidDate()', function() {
    it('should return back true if passed a valid date', function() {
      var foo = require('../date/date');
      assert.equal(foo.isValidDate('10-12-1961'), true);
      assert.equal(foo.isValidDate('12/11/1961'), true);

    });

    it('should return back false if not a valid date', function() {
      var foo = require('../date/date');
      assert.equal(foo.isValidDate('11-31-1061'), false);
      assert.equal(foo.isValidDate('13-11-1961'), false);
    });
  })
});

describe('formatDate', function() {
  describe('#formatDate()', function() {
    it('should return back true if passed valid string', function() {
      var foo = require('../date/date');
      assert.equal(foo.formatDate('10032017'), '10-03-2017');
      assert.equal(foo.formatDate('04202017'), '04-20-2017');
    });

    it('should pass if passed in an invalid string', function() {
      var foo = require('../date/date');
      assert.equal(foo.formatDate('1234567'), "Invalid input");
      assert.equal(foo.formatDate('1212-014'), "Invalid input");
      assert.equal(foo.formatDate('05a6abcd'), "Invalid input");
    });
    
  })
});
