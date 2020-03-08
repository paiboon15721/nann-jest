import fizzbuzz from './fizzbuzz'

test('Input 1 should be return 1', () => {
  expect(fizzbuzz(1)).toBe(1)
})

test('Input 2 should be return 2', () => {
  expect(fizzbuzz(2)).toBe(2)
})

test('Input 3 should be return fizz', () => {
  expect(fizzbuzz(3)).toBe('fizz')
})
