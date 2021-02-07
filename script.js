// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails


function checkUserName(username){
    if (username != "" && (username.length >= 8 && username.length < 15) )
    {
        for(var i=0;i<username.length;i++){
            let element = username[i]
            if(element == " ")
                return false
            if(element == '!' || element == '@' || element == '#' || element == '%' || element =='$' || element=='^' || element == '&' || element == '*')
                return false
        }
        return true
    }
    else
        return false
}




// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise


function checkEmail(email){
    var regex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
}





// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false


function checkPassword(password){
    var regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_])[A-Za-z\d!@#$%^&*()_]$/;
    return regex.test(password);
}