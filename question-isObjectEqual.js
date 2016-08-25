const assert = require('assert')

function isObjectEqual (a, b) {
  // both of them are object ? or just return a === b
  if (typeof a !== 'object' || typeof b !== 'object') {
    return a === b
  }

  // null === null
  if (a === b) {
    return true
  }

  const KeysOfA = Object.keys(a)
  const KeysOfB = Object.keys(b)

  if (KeysOfA.length !== KeysOfB.length) { return false }
  if (KeysOfA.length === 0 && KeysOfB.length === 0) { return true }

  return KeysOfA.every(key => isObjectEqual(a[key], b[key]))
}

describe('isObjectEqual', function() {
  it('should equal when both undefined', function() {
    assert.ok(isObjectEqual())
  });

  it('should equal with simple values', function() {
    assert.ok(isObjectEqual(1, 1))
    assert.ok(isObjectEqual('', ''))
    assert.ok(isObjectEqual('1', '1'))
    assert.ok(isObjectEqual(true, true))
    assert.ok(isObjectEqual(null, null))
    assert.ok(isObjectEqual(Infinity, Infinity))
    assert.ok(isObjectEqual(-Infinity, -Infinity))
  });

  it('should equal with simple objects', function() {
    assert.ok(isObjectEqual({}, {}))
    assert.ok(isObjectEqual([], []))
    assert.ok(isObjectEqual([1], [1]))
    assert.ok(isObjectEqual([1, { a: 1 }], [1, { a: 1 }]))
    assert.ok(isObjectEqual({ a: 1 }, { a: 1 }))
    assert.ok(isObjectEqual({ a: 1, b: 2 }, { b: 2, a: 1 }))
  });

  it('should equal with complex objects', function() {
    assert.ok(isObjectEqual({ a: {} }, { a: {} }))
    assert.ok(isObjectEqual({ a: { b: 1 } }, { a: { b: 1 } }))
    assert.ok(isObjectEqual({ a: { b: 1 }, b: 1 }, { b: 1, a: { b: 1 } }))
  });

  it('should not equal when one of them is undefined', function() {
    assert.ok(!isObjectEqual(undefined, ''))
    assert.ok(!isObjectEqual(''))
    assert.ok(!isObjectEqual(null))
    assert.ok(!isObjectEqual(0))
  });

  it('should not equal when one of them is NaN', function() {
    assert.ok(!isObjectEqual(NaN, NaN))
    assert.ok(!isObjectEqual(NaN, 1))
    assert.ok(!isObjectEqual(NaN))
  });

  it('should not equal with different types', function() {
    assert.ok(!isObjectEqual('', 0))
    assert.ok(!isObjectEqual('', false))
    assert.ok(!isObjectEqual(0, false))
    assert.ok(!isObjectEqual(true, 1))
    assert.ok(!isObjectEqual(true, {}))
    assert.ok(!isObjectEqual([], '1'))
  });
});
