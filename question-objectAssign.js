const assert = require('assert')

function assign () {
  let args = [].slice.call(arguments)
  const target = args.shift()

  /* invaild target: undefined / null / not object */
  if (!target || typeof target !== 'object') {
    throw new Error('invaild target')
  }

  args = args.filter(item => typeof item === 'object')

  args.forEach(item => {
    for (let key in item) {
      if (item.hasOwnProperty(key)) {
        target[key] = item[key]
      }
    }
  })

  return target
}

describe('objectAssign', function() {
  it('should throws invaild target', function() {
    assert.throws(() => { assign() }, Error)
    assert.throws(() => { assign(null) }, Error)
    assert.throws(() => { assign(1) }, Error)
    assert.throws(() => { assign(true) }, Error)
    assert.throws(() => { assign('') }, Error)
  })

  it('should not throws invaild arguments', function() {
    assert.deepStrictEqual(assign({ a: 1 }, null, { b: 2 }), { a: 1, b: 2 })
    assert.doesNotThrow(() => { assign({ a: 1 }, null, { b: 2 }), { a: 1, b: 2 } })
    assert.deepStrictEqual(assign({ a: 1 }, undefined, { a: 2 }), { a: 2 })
    assert.doesNotThrow(() => { assign({ a: 1 }, undefined, { a: 2 }), { a: 2 } })
    assert.deepStrictEqual(assign({ a: 1 }, '1', { a: 2 }), { a: 2 })
    assert.doesNotThrow(() => { assign({ a: 1 }, '1', { a: 2 }), { a: 2 } })
    assert.deepStrictEqual(assign({ a: 1 }, 666, { a: 2 }), { a: 2 })
    assert.doesNotThrow(() => { assign({ a: 1 }, 666, { a: 2 }), { a: 2 } })
    assert.deepStrictEqual(assign({ a: 1 }, true, { a: 2 }), { a: 2 })
    assert.doesNotThrow(() => { assign({ a: 1 }, true, { a: 2 }), { a: 2 } })
  })

  it('should equal with simple objects merge', function() {
    assert.deepStrictEqual(assign({ a: 1 }, { b: 2 }), { a: 1, b: 2 })
    assert.deepStrictEqual(assign({ a: 1 }, {}, { b: 2 }), { a: 1, b: 2 })
    assert.deepStrictEqual(assign({ a: 1 }, { a: 2 }), { a: 2 })
  })

  it('should equal with complex objects merge', function() {
    let b = { c: 2 }
    assert.deepStrictEqual(assign({ a: 1, b }, { b: 2 }), { a: 1, b: 2 })
    assert.deepStrictEqual(assign({ a: 1, b }, { d: 3 }), { a: 1, b: { c: 2 }, d: 3 })
    assert.ok(() => {
      let temp = assign({}, { a: 1, b }, { a: 2 })
      return temp.b === b
    })
  })
})
