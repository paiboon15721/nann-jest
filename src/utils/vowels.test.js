import vowels from './vowels'

test('input Hi There! should be return 3', () => {
  expect(vowels('Hi There!')).toBe(3)
})

test('input Why do you ask? should be return 4', () => {
  expect(vowels('Why do you ask?')).toBe(4)
})

test('input Why? should be return 0', () => {
  expect(vowels('Why?')).toBe(0)
})

test('input aAti!O should be return 4', () => {
  expect(vowels('aAti!O')).toBe(4)
})
