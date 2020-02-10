/* Javascript Milestones: Numbers, Pt.2
Notes on this file found in numbers.txt
Manipulating numbers beyond basic number operations
*/

function rightMostDigit(blah){
  console.log('Blah is equal to: ' + blah)
  let rightMostDigit = blah % 10
  return rightMostDigit
}

function isEvenOrOdd(blah){
 console.log(blah)
  if (blah % 2 === 0)
  return (blah + ' is even')
 else (blah % 2 === 1)
  return (blah + ' is odd')
 } 

function increment(blah){
  console.log('The original number is ' + blah)
  let k = 100 //k is the number of incrementation
  //return ('The incremented number is ' + (blah + 1)) --> increment by one
  //return ('The incremented number is ' + (blah + 2)) --> increment by two
  //return ('The incremented number is ' + (blah + 10)) --> increment by 10
  return ('The incremented number is ' + (blah + k)) // --> increment by k
}

function decrement(blah){
  console.log('The original number is ' + blah)
  let k = 100 //k is the number of decrementation
  //return ('The decremented number is ' + (blah - 1)) --> increment by one
  //return ('The decremented number is ' + (blah - 2)) --> increment by two
  //return ('The decremented number is ' + (blah - 10)) --> increment by 10
  return ('The decremented number is ' + (blah - k)) // --> increment by k
}
/*if (require.main === module) {

  console.log('Running sanity checks for rightMostDigit');

  console.log(rightMostDigit(64));
  console.log(rightMostDigit(648));
  console.log(rightMostDigit(62541564));
  console.log(rightMostDigit(7894651231));
}
module.exports = rightMostDigit;
*/
/*if (require.main === module) {

  console.log('Running sanity checks for isEvenOrOdd');

  console.log(isEvenOrOdd(64));
  console.log(isEvenOrOdd(648));
  console.log(isEvenOrOdd(62541564));
  console.log(isEvenOrOdd(7894651231));
}
module.exports = isEvenOrOdd;
*/
/*if (require.main === module) {

  console.log('Running sanity checks for increment');

  console.log(increment(64));
  console.log('-------------------');
  console.log(increment(648));
  console.log('-------------------');
  console.log(increment(62541564));
  console.log('-------------------');
  console.log(increment(7894651231));
  console.log('-------------------');
}
module.exports = increment;
*/
if (require.main === module) {

  console.log('Running sanity checks for decrement');

  console.log(decrement(64));
  console.log('-------------------');
  console.log(decrement(648));
  console.log('-------------------');
  console.log(decrement(62541564));
  console.log('-------------------');
  console.log(decrement(7894651231));
  console.log('-------------------');
}
module.exports = decrement;
