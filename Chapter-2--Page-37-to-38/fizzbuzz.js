/* Good 'ol Fizzbuzz */
/* instruction:
    Write a program that uses console.log to print all the numbers from 1 - 100.

    If divisible by 3 print 'fizz',

    If divisible by 5 print 'buzz,

    If divisible by both print 'fizzbuzz'
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz")
  } else if (i % 3 === 0) {
    console.log("fizz")
  } else if (i % 5 === 0) {
    console.log("buzz")
  } else {
    console.log(i)
  }
}
