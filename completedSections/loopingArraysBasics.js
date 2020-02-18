/* /* Javascript Milestones: Looping with Numbers
part 2 of the looping exercises
*/
//This will print each element of the array
/*let coolArray = [2, 3, 4, 6, 7, 8]
console.log('The array is: ' + coolArray)
for (let i = 0; i < coolArray.length; i++) {
  console.log('The element at index: ' + i + ' is:' + coolArray[i]); 
}
console.log('-------------------------------')
*/
//This will print every other element of the array
/*let coolArray = [2, 3, 4, 6, 7, 8]
console.log('The array is: ' + coolArray)
for (let i = 0; i < coolArray.length; i+=2) {
  console.log('The element at index: ' + i + ' is:' + coolArray[i]); 
}
console.log('-------------------------------')*/
//This will print the array in reverse order using the array.reverse() feature
let coolArray = [2, 3, 4, 6, 7, 8]
console.log('The array is: ' + coolArray)
console.log('This is the array, reversed: ' + coolArray.reverse())
for (let i = 0; i < coolArray.length; i++) {
  console.log('The element at index: ' + i + ' is:' + coolArray[i]); 
}
console.log('-------------------------------')
//This will print the array in reverse order, using the index
let coolArray2 = [2, 3, 4, 6, 7, 8]
console.log('The array is: ' + coolArray2)
for (let i = coolArray2.length -1; i >= 0; i--) {
  console.log('The element at index: ' + i + ' is:' + coolArray2[i]); 
}
console.log('-------------------------------')
