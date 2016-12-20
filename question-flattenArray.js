const assert = require('assert')

/* @params { arr } is an Array */
function flatten (arr = []) {

  const newArr = []

  function recurison (item) {
    if (Array.isArray(item)) {
      item.forEach(recurison)
    } else {
      newArr.push(item)
    }
  }

  recurison(arr)

  return newArr
}

describe('flattenArray', function() {
  it('simple cases', function() {
    assert.deepStrictEqual(flatten([]), [])
    assert.deepStrictEqual(flatten([[]]), [])
    assert.deepStrictEqual(flatten([[], []]), [])
    assert.deepStrictEqual(flatten([[','], [',']]), [',', ','])
    assert.deepStrictEqual(flatten([[], [], [1]]), [1])
    assert.deepStrictEqual(flatten([[], [1, 2], [3, 4]]), [1, 2, 3, 4])
    assert.deepStrictEqual(flatten([[], [1, 2], [3, 4], [[5]]]), [1, 2, 3, 4, 5])
    assert.deepStrictEqual(flatten([[1], null, [2], [3, 4], [[5]]]), [1, null, 2, 3, 4, 5])
  })
})
