/* More Strings! Bitch we are learning!
Here's a bunch of stuff to do with strings!
This file is also where I will start to use the command like more (hopefully)
*/

function stringFeatures(waffle , k){ //this fucntion will show a bunch of different features of a string, waffle
  console.log(`The value of waffle, the string, is now "${waffle}"`)
  console.log(`First we will find the length of a string using the [string].length feature = ${waffle.length}`)
  console.log(`2. Use [string].toUpperCase() to convert the string to uppercase: ${waffle.toUpperCase()}`)
  console.log(`3. Similarly, use [string].toLowerCase() to convert the string to lowercase: ${waffle.toLowerCase()}`)
  console.log(`4. In Javascript, the fist element of anything begins at 0, not 1. To get the first character of a string, use [string[0]]: ${waffle[0]}`)
  console.log(`5. The same logic follows to find the second character of the string. Use [string[1]]: ${waffle[1]}`)
  console.log(`6. To find the last character of a string, do [string].length - 1: ${waffle[waffle.length-1]}`)
  console.log(`7. k is a character place in the string. Let k = ${k}. To find what value is at k, the syntax is the same as the finding the first or second character: ${waffle[k]}`)
  console.log(`8. To add to the end of a string, use the + operator: ${waffle + 'a'}`)


} 

stringFeatures('fuck this shit im out', 7)
