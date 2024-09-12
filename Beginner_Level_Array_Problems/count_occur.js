// Count Occurrences: Write a program that counts how many times a specific element appears in an array.

function findSimilar(arr){
    let count = {};
    for(let i of arr){
        if(count[i] = count[i]){
            count[i]++
        }
        else(
            count[i] = 1
        )
    }
    return count;
}


let array = [1, 2, 3, 4, 2, 3, 3, 3];
console.log(findSimilar(array));