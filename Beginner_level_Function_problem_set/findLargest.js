/**
 * **Find the Largest Number**  
 * Write a function that takes an array and return the largest number among them.
 */

function largestNumber(arr){
    let largeNum = 0;
    for(let i of arr){
        if(i > largeNum){
            largeNum = i;
        }
    }
    return largeNum;
}

console.log(largestNumber([1200, 55, 58, 46, 89, 500]))