const assert = require('assert')

function clone (a) {
  // number string boolean undefined
  if (typeof a !== 'object') {
    return a
  }
  if (a === null) {
    return null
  }

  if (Array.isArray(a)) {
    let b = []
    a.forEach((item, index) => { b[index] = clone(item) })
    return b
  }

  let b = {}
  for (let key in a) {
    if (a.hasOwnProperty(key)) {
      b[key] = clone(a[key])
    }
  }

  return b
}

describe('clone', function() {
  it('input: undefined', function() {
    assert.deepStrictEqual(clone(), undefined)
  });

  it('input: string boolean number NaN Infinity', function() {
    assert.deepStrictEqual(clone(1), 1)
    assert.deepStrictEqual(clone(''), '')
    assert.deepStrictEqual(clone('1'), '1')
    assert.deepStrictEqual(clone(true), true)
    assert.deepStrictEqual(clone(null), null)
    assert.deepStrictEqual(clone(Infinity), Infinity)
    assert.deepStrictEqual(clone(-Infinity), -Infinity)
  });

  it('input: simple objects', function() {
    assert.deepStrictEqual(clone({}), {})
    assert.deepStrictEqual(clone([]), [])
    assert.deepStrictEqual(clone([1]), [1])
    assert.deepStrictEqual(clone([1, { a: 1 }]), [1, { a: 1 }])
    assert.deepStrictEqual(clone({ a: 1 }), { a: 1 })
    assert.deepStrictEqual(clone({ a: 1, b: 2 }), { b: 2, a: 1 })
  });

  it('input: complex objects', function() {
    assert.deepStrictEqual(clone({ a: {} }), { a: {} })
    assert.deepStrictEqual(clone({ a: { b: 1 } }), { a: { b: 1 } })
    assert.deepStrictEqual(clone({ a: { b: 1 }, b: 1 }), { b: 1, a: { b: 1 } })
  });
});
