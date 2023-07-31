import curry2 from '../_curry2';

const fn = (a: number, b: number) => a + b

test('curries 1 arg fnc', () => {
  const curried1 = curry2(fn)(1)
  expect(typeof curried1).toBe('function')
})

test('curries 0 arg fnc', () => {
  const curried0 = curry2(fn)
  expect(typeof curried0).toBe('function')
})

test('returns value if all args provided', () => {
  const curried = curry2(fn)
  expect(curried(1)(2)).toBe(3)
})