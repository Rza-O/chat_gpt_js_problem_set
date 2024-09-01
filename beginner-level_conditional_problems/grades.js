//Grade Classification: Write a program that takes a numeric grade (0-100) and prints out the corresponding letter grade (A, B, C, D, F).

let marks = 38;

if(marks >= 60){
    if( marks >= 90){
        console.log('You have gotten A');
    }
    else if(marks >= 80){
        console.log('You have gotten B');
    }
    else if(marks >= 70){
        console.log('You have gotten C');
    }
    else{
        console.log('You have gotten D');
    }
}
else{
    console.log('You have failed. Better Luck next time');
}