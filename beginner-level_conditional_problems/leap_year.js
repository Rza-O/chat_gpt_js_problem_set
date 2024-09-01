//Leap Year Checker: Write a program that checks if a given year is a leap year or not.

let year = 3370;

if(year % 4===0){
    if(year % 100 === 0){
        if(year % 400===0){
            console.log(year, 'is a leap year');
        }
        else{
            console.log(year.toString(), 'Is not a leap year')
        }
    }
    else{
        console.log(year, 'is leap year')
    }
}
else{
    console.log(year.toString(), 'Is not a leap year');
}