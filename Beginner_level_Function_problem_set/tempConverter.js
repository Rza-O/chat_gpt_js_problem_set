/**
 * **Convert Temperature**  
 * Write a function that converts temperature from Celsius to Fahrenheit.
 */

function tempConverter(num){
    let toFahrenheit = num * 1.8 + 32;
    return toFahrenheit;
}
console.log(tempConverter(32));