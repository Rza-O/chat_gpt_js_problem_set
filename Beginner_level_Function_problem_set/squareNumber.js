//**Square of a Number**  
// Write a function that takes a number as an argument and returns its square.

function squared(num){
    numSquared = num * num;
    return numSquared;
}
// console.log(squared(8));

// Write a function that takes an array as an argument and returns square of every number in the array.
function squaredArray(arr){
    let squaredArray = [];
    for(let i of arr){
        i = i * i;
        squaredArray.push(i);
    }
    return squaredArray;
}
console.log(squaredArray([2, 3, 4, 5, 8]));
