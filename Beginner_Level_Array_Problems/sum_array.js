//Sum of Array Elements: Write a program that calculates the sum of all elements in an array.

let array = [2, 5, 9, 6];

let sumArray = array.reduce(function(x,y){
    return x + y;
}, 0);

console.log(sumArray);