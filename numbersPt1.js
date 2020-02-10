/* Javascript Milestones: Numbers Edition
Notes on this file found in numbers.txt

*/

function addNumbers(num1, num2){
  let sum = num1 + num2
  return sum
}

function subtractNumbers(num1, num2){
  let difference = num1 - num2
  return difference
}

function multiplyNumbers(num1, num2){
  let product = num1*num2
  return product
}

function divideNumbers(num1, num2){
  let quotient = num1/num2
  return quotient
}

function modulusNumbers(num1, num2){
  let answer = num1 % num2
  return answer
}

function exponentNumbers(num1, num2){
  let answer = num1**num2
  return answer
}

function roundDown(num1, num2){
  let roundDown = Math.floor((num1/num2))
  return roundDown
}
/*if (require.main === module) {
  //console.log('The value of number 1 is' + num1)
  //console.log('The value of number 2 is' + num2)

  console.log('Running sanity checks for addNumbers');

  console.log(addNumbers(1,2));
  console.log(addNumbers(2,2));
  console.log(addNumbers(17,2));
  console.log(addNumbers(101,2));
  console.log(addNumbers(1,298));
  console.log(addNumbers(-10,2));
}
module.exports = addNumbers;
*/
/*if (require.main === module) {
  //console.log('The value of number 1 is' + num1)
  //console.log('The value of number 2 is' + num2)

  console.log('Running sanity checks for subtractNumbers');

  console.log(subtractNumbers(1,2));
  console.log(subtractNumbers(2,2));
  console.log(subtractNumbers(17,2));
  console.log(subtractNumbers(101,2));
  console.log(subtractNumbers(1,298));
  console.log(subtractNumbers(-10,2));
}

module.exports = subtractNumbers;
*/

/*if (require.main === module) {
  //console.log('The value of number 1 is' + num1)
  //console.log('The value of number 2 is' + num2)

  console.log('Running sanity checks for multiplyNumbers');

  console.log(multiplyNumbers(1,2));
  console.log(multiplyNumbers(2,2));
  console.log(multiplyNumbers(17,2));
  console.log(multiplyNumbers(101,2));
  console.log(multiplyNumbers(1,298));
  console.log(multiplyNumbers(-10,2));
}

module.exports = multiplyNumbers;
*/

/*if (require.main === module) {
  //console.log('The value of number 1 is' + num1)
  //console.log('The value of number 2 is' + num2)

  console.log('Running sanity checks for divideNumbers');

  console.log(divideNumbers(16,2));
  console.log(divideNumbers(2,2));
  console.log(divideNumbers(33,11));
  console.log(divideNumbers(100,2));
  console.log(divideNumbers(7894,2));
  console.log(divideNumbers(-10,2));
}

module.exports = divideNumbers;
*/

/*if (require.main === module) {
  //console.log('The value of number 1 is' + num1)
  //console.log('The value of number 2 is' + num2)

  console.log('Running sanity checks for modulusNumbers');

  console.log(modulusNumbers(1,2));
  console.log(modulusNumbers(2,2));
  console.log(modulusNumbers(174613,2));
  console.log(modulusNumbers(11,2));
  console.log(modulusNumbers(8974645132,298));
  console.log(modulusNumbers(-10,3));
}

module.exports = modulusNumbers;
*/
/*if (require.main === module) {
  //console.log('The value of number 1 is' + num1)
  //console.log('The value of number 2 is' + num2)

  console.log('Running sanity checks for exponentNumbers');

  console.log(exponentNumbers(1,2));
  console.log(exponentNumbers(52,2));
  console.log(exponentNumbers(17,8));
  console.log(exponentNumbers(101,2));
  console.log(exponentNumbers(1165462,28));
  console.log(exponentNumbers(-10,2));
}

module.exports = exponentNumbers;
*/
if (require.main === module) {
  //console.log('The value of number 1 is' + num1)
  //console.log('The value of number 2 is' + num2)

  console.log('Running sanity checks for roundDown');

  console.log(roundDown(1,2));
  console.log(roundDown(2,2));
  console.log(roundDown(174613,2));
  console.log(roundDown(11,2));
  console.log(roundDown(8974645132,298));
  console.log(roundDown(-10,3));
}

module.exports = roundDown;