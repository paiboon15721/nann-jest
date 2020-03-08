// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   var results = 0
//   var arr = ['a', 'e', 'i', 'o', 'u']
//   for(let i = 0; i < str.length; i += 1) {
//     let char = str.charAt(i)
//     if(arr.includes(char.toLowerCase())) {
//       results += 1
//     }
//   }

//   return results
// }

const vowels = v =>
  v
    .toLowerCase()
    .split('')
    .filter(v => 'aeiou'.includes(v)).length

export default vowels
