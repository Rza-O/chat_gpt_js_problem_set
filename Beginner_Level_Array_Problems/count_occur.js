// Count Occurrences: Write a program that counts how many times a specific element appears in an array.

let a = [1, 2, 3, 4, 2, 3];

let count = a.reduce(function(x, y){
    // if(x[y]) {
    //     x[y]++;
    // }
    // else(
    //     x[y] = 1
    // )
    // return x;
    return (
        x[y] ? ++x[y] : (x[y] = 1), // this is re written in ternary operator 
        x
    );
}, {}) // empty curly bracket counts as the initial accumulator

console.log(count)
