var password = require ('generate-password');
function generatePassword (){
    const pass = password.generate({
        length : 18,
        uppercase : true,
        numbers : true,
        Symbol : true
    });
    return pass;

}

const randomPassword = generatePassword();

console.log(`This is the random password : ${randomPassword}` )