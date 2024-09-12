/**
 * **String Reversal**  
 * Write a function that takes a string as input and returns the string reversed.
 */
function reversal(str){
    let reversed = []
    for(let char of str){
        reversed.unshift(char)
    }
    return reversed.join('')
}

console.log(reversal('I am a programmer'))