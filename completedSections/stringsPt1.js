/* Strings Milestones Exercises
Notes on this file can be found in 
strings.txt
*/

function printStrings (str1, str2){ //two variables, str1 and str2, inputs are strings
  return str1 + ' ' + str2 //returns str1, a space, then str2
}
function concatenateStrings(str1, str2){
  return str1 + str2
}
function stringIncludes(str1, str2){
  console.log('The value of string 1 is ' + str1)
  console.log('The value of string 2 is ' + str2)
  console.log(('We are searching to see if string 1, ' + str1) +(' ,contains string 2 ' + str2))
  if (str1.includes(str2))
    return 'String one is found in String 2'
  else 
    return 'String one is not found in String 2'
}
/*if (require.main === module){
  console.log('Running sanity checks for printStrings')
  console.log(printStrings('hello', 'world'))
  console.log(printStrings('hello', 'Jaelyn'))
  console.log(printStrings('FUCK', 'it'))
  console.log(printStrings('cheese', 'CaKe'))
  console.log(printStrings('People', 'suck'))

}

module.exports = printStrings;
*/
/*if (require.main === module){
  console.log('Running sanity checks for concatenateStrings')
  console.log(concatenateStrings('hello', 'world'))
  console.log(concatenateStrings('hello', 'Jaelyn'))
  console.log(concatenateStrings('FUCK', 'it'))
  console.log(concatenateStrings('cheese', 'CaKe'))
  console.log(concatenateStrings('People', 'suck'))

}

module.exports = concatenateStrings;
*/
/*if (require.main === module){
  console.log('Running sanity checks for stringIncludes')
  console.log(stringIncludes('hello', 'world'))
  console.log('--------------------------')
  console.log(stringIncludes('hello Jaelyn', ' Hello Jaelyn'))
  console.log('--------------------------')
  console.log(stringIncludes('FUCK it', 'FUCK it'))
  console.log('--------------------------')
  console.log(stringIncludes('cheesecake', 'cheese CaKe'))
  console.log('--------------------------')
  console.log(stringIncludes('People', 'suck'))
  console.log('--------------------------')

}

module.exports = stringIncludes;
*/
