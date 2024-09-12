//Sum of Array Elements: Write a program that calculates the sum of all elements in an array.

let array = [2, 5, 9, 6];

function sumOfArray(arr){
    let sum = 0;
    for(let i in arr){
        sum = sum + arr[i];
    }
    return sum
}

console.log(sumOfArray(array));