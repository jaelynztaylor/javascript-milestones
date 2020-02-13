/* Arrays! Hooray!
Buckle up buttercup, we doin arrays now! 
Honestly, the structure is very similar to strings so don't sweat!
*/

function arrayFeatures (k){
  let coolArray = [100, 200, 300, 400, 500]
  console.log(`The value of coolArray, the array we'll be using as the example, is now "${coolArray}"`)
  console.log(`First we will find the length of a array using the [array].length feature = ${coolArray.length}`)
  console.log(`2. In Javascript, the fist element of anything begins at 0, not 1. To get the first element of a array, use [array[0]]: ${coolArray[0]}`)
  console.log(`3. The same logic follows to find the second element of the array. Use [array[1]]: ${coolArray[1]}`)
  console.log(`4. To find the last element of a array, do [array].length - 1: ${coolArray[coolArray.length-1]}`)
  console.log(`5. k is an element place in the array. Let k = ${k}. To find what value is at k, the syntax is the same as the finding the first or second character: ${coolArray[k]}`)
  console.log(`6. To append an element to an array, use the array.push operator: ${coolArray.push(600)}`)
  console.log(coolArray)
  console.log(`7. To remove the last element of an array, use [array].pop: ${coolArray.pop()}`)
  console.log(coolArray)
  console.log(`8. To add elements to the beginning of an array, use [array].unshift(): ${coolArray.unshift(98, 99)}`)
  console.log(coolArray)
  console.log(`9. To remove specifically the first element of an array, use [array].shift(): ${coolArray.shift()}`)
  console.log(coolArray)
  console.log(`To remove any other element from an array, use [array].splice(starting index, number of elements to remove): ${coolArray.splice(1,2)}`)
  console.log(coolArray)
}
arrayFeatures(2)

