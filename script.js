

//create array for lowerletter, upperletters, numbers, and special

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var special = ['!', '@', '#', '$', '%', '^', '&']
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
var useUpper = false
var useLower = false
var useSpec = false
var useNum = false

function generatePassword() {
  // var length = prompt("How long would you like your password?")
  var pwLength = prompt("How long would you like your password?", "8-128");
  var newPass = ''

  console.log(pwLength)

  if (pwLength >= 8 && pwLength <= 128) {
    useUpper = confirm("Do you want to use Capital Letters ?", "yes or No");
    useNum = confirm("Do you want to use Numbers  ?", "yes or No");
    useSpec = confirm("Do you want to use Special Characters ?", "yes or No");
    useLower = confirm("Do you want to use LowerCase Letters ?", "yes or No");
    pwArray = []



    console.log(pwArray)
    console.log("success")
    newPass = random(pwArray, pwLength)
  } else {
    alert("Retry")
  }
  return newPass
}

function random(pwArray, pwLength) {
  var random = ''
  for (var i = 0; i < pwLength; i++) {
    if (useLower && random.length<pwLength) {
      random = random + lowercase[Math.floor(Math.random() * lowercase.length)];
    }
    if (useUpper && random.length<pwLength) {
      random = random + uppercase[Math.floor(Math.random() * uppercase.length)];
    }
    if (useNum && random.length<pwLength) {
      random = random + numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (useSpec && random.length<pwLength) {
      random = random + special[Math.floor(Math.random() * special.length)];
    }

  }
  return random;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("hello", random)

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

