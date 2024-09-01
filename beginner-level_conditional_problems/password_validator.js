//Password Validator: Create a simple password validator that checks if a user's input meets the required criteria (e.g., at least 8 characters long, contains both letters and numbers).

// Solved with the help of AI
//regular expression
//.match()



let password = 'sdasdasdadas8sdsda'

function validatePassword(password){
    //Validating the length of the password
    if(password.length < 8){
        return "Password must be 8 characters long";
    }
    //validating letters
    if(!/[a-zA-Z]/.test(password)){
        return'Password must contain one letter';
    }
    // validating numbers
    if(!/\d/.test(password)){
        return "password must contain one number";
    }
    return 'password is valid';
}
console.log(validatePassword(password));