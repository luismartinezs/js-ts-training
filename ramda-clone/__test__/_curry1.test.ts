import curry1 from '../_curry1';

test('curries 1 arg fnc', () => {
  expect(curry1((a: number) => a)(1)).toBe(1)
})

test('returns fnc if no arguments', () => {
  const fnc = (a: number) => a
  const curried = curry1(fnc)
  expect(typeof curried).toBe('function')
})