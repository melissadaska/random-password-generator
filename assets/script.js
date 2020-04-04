// Assignment code here

function charCount() {
  var isLengthValid = false;

  while(isLengthValid === false) {
    // ask user how many characters they want their password
    var passwordLength = window.prompt('Choose a password length between 8 and 128 characters.');

    // if length is not within valid range, inform user and prompt again
    if(passwordLength >= 8 &&
      passwordLength <= 128) {
        alert("Length of password is accepted as " + passwordLength + ".");
        isLengthValid = true;
    } else {
      alert("Invalid password length of " + passwordLength + ". Please provide password length of at least 8 characters long and no more than 128 characters.")
    }
  }
  
  return passwordLength;
}

function charType(passwordLength) {
  // switch statement based on charType selected
  // generate appropriate password based on charType
  // for (var i=0; i < passwordLength; i++)
}

// function isCharValid(passwordLength, passwordType) {

  
// }

function generatePassword() {
  var passwordLength = charCount();
  var passwordType = charType(passwordLength);
  // var isPasswordValid = isCharValid(passwordLength, passwordType);
  return password


  // if (isPasswordValid) {
  //   // write code to create password
  //   return password
  // } else {
  //   // alert with password & exit
  //   alert("Your password is " + password);
  // }

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
