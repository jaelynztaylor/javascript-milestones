/* Conversions and Equivalents
Changing stuff into other stuff. Why? Sometimes you gotta bro.
*/

let num = 15
console.log('Number to String exercise')
console.log(' ')
console.log('To convert a number into a string, use the .toString function: ')
console.log(num) //notice the color distinctions when running the code in the terminal
console.log (num.toString())

console.log('----------------------------')

let str = '1254'
let stringToNumber = Number(str)
console.log('String to Number exercise')
console.log(' ')
console.log('The string we are converting to a number is: ' + str)
console.log('The operator we are using is the Number operator: Number(value). Value, in this case, is a string.')
console.log(stringToNumber) //again, notice the color distinction
console.log('The string is now a number')

console.log('----------------------------')

let str2 = 'watermelon'
console.log('String to Array exercise')
console.log(' ')
console.log('This exercise will take a string and place its characters into an array. The string is: ' + str2)
console.log('We will use the string.split function to separate the characters and place them into an array:')
console.log(str2.split(''))

console.log('----------------------------')

let elementsofArray = ['orange', 'apple', 'banana', 'pineapple']
console.log('Join Array Exercises')
console.log(' ')
console.log('These next exercises will use the array.join operator to join elements of an array. The array we will be working with is ' + elementsofArray)
console.log('')
console.log('This is what it looks like if you simply do array.join() with no parameters:')
console.log(elementsofArray.join())
console.log('')
console.log('Now we will join them with this character: |')
console.log(elementsofArray.join('|'))
console.log('')
console.log('And this version will join them into one string (see code): ')
console.log(elementsofArray.join(''))