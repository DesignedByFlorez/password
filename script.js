

//create array for lowerletter, upperletters, numbers, and special

var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numbers = ['1','2','3','4','5','6','7','8','9']
var special = ['!','@','#','$','%','^','&']
// Assignment Code
var generateBtn = document.querySelector("#generate");

//Make generatePassword function
//Prompt for password length is a number
//if statement, if # is above 8 && below 128
//Confirm for lowercase, uppercase, and special characters
//store response in a variable 
// if statement for each confirm 
    //if statement is true, push characters to a array of all selected characters
//for loop, while I is less than their answer for number length prompt
        //randomly pull characters from big array
        //pull random characters from array using math random
        //have a var declared above for loop
        //that var += theRandomCharacter
        //return password var



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword(){
    // var length = prompt("How long would you like your password?")
    var plength = JSON.parse(prompt("How long would you like your password?","0"));

    if (plength.value<8 && plength.value>128){
        console.log("Nice")
    } else {
        console.log(plength)
    }
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
