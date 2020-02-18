/* Javascript Milestones: Looping with Numbers
part 1 of the looping exercises
*/

function betweenMinMax (min, max) {
  for (let index = min; index < max+1; index++) {
    console.log(index)
  }
}
function EvensBetweenMinMax (min, max){
  for (let i = min; i < max+1; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}
function multiplesOf(k, n){
  console.log('This function works given two variables, k and n. k is the number and n is the the number of multiples you want.')
  console.log('This is your number: ' + k)
  console.log('You want the first ' + n + ' multiples of ' + k)
  let largestProduct = k*n
  console.log('This is the largest product: ' + largestProduct)
  let multipleArray = []
  for (let i = 1; i <= n; i++) {
    let product = i * k
    multipleArray.push(product)
  }
  console.log(multipleArray)
}

betweenMinMax(40, 60);
console.log('-------------------------------')
EvensBetweenMinMax(40, 60);
console.log('-------------------------------')
multiplesOf(7,3);
console.log('-------------------------------')
multiplesOf(5,8);
