/**
 * **Check Even or Odd**  
 * Write a function that takes a number and returns whether it is even or odd.
 */

function evenOdds(num){
    return (num % 2 === 0)? 'Number is Even': 'Number is Odd';
}

console.log(evenOdds(6))