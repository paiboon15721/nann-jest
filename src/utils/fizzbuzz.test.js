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

test('Input 4 should be return 4', () => {
  expect(fizzbuzz(4)).toBe(4)
})

test('Input 5 should be return buzz', () => {
  expect(fizzbuzz(5)).toBe('buzz')
})

test('Input 6 should be return 6', () => {
  expect(fizzbuzz(6)).toBe('fizz')
})

test('Input 7 should be return 7', () => {
  expect(fizzbuzz(7)).toBe(7)
})

test('Input 8 should be return 8', () => {
  expect(fizzbuzz(8)).toBe(8)
})

test('Input 9 should be return fizz', () => {
  expect(fizzbuzz(9)).toBe('fizz')
})

test('Input 10 should be return buzz', () => {
  expect(fizzbuzz(10)).toBe('buzz')
})

test('Input 11 should be return 11', () => {
  expect(fizzbuzz(11)).toBe(11)
})

test('Input 12 should be return fizz', () => {
  expect(fizzbuzz(12)).toBe('fizz')
})

test('Input 13 should be return 13', () => {
  expect(fizzbuzz(13)).toBe(13)
})

test('Input 14 should be return 14', () => {
  expect(fizzbuzz(14)).toBe(14)
})

test('Input 15 should be return fizz buzz', () => {
  expect(fizzbuzz(15)).toBe('fizz buzz')
})