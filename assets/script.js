// Assignment code here

function charCount() {
  var isLengthValid = false;

  while(isLengthValid === false) {
    // ask user how many characters they want their password
    var passwordLength = window.prompt('Choose a password length between 8 and 128 characters.');

    // if length is not within valid range, inform user and prompt again
    passwordLength = parseInt(passwordLength);
    if(passwordLength >= 8 &&
      passwordLength <= 128) {
        alert("Length of password is accepted as " + passwordLength + ".");
        isLengthValid = true;
    } else if(passwordLength = null) {
      // TODO - Investigate window prompt cancel
      alert("User clicked cancel");
      break;
    } else {
      alert("Invalid password length of " + passwordLength + ". Please provide password length of at least 8 characters long and no more than 128 characters.")
    }
  }
  
  return passwordLength;
}

function createPassword(passwordLength, typeChoices) {
  password = "";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  for (var i=0; i < passwordLength; i++) { 
    var item = typeChoices[Math.floor(Math.random() * typeChoices.length)];
    switch (item) {
      case 1: // concat lowercase to password
        password += lowercase[Math.floor(Math.random() * lowercase.length)];
        break;
      case 2: // concat uppercase to password
        password += uppercase[Math.floor(Math.random() * uppercase.length)];
        break;
      case 3: // concat numeric to password
        password += numeric[Math.floor(Math.random() * numeric.length)];
        break;
      case 4: // concat special char to password
        password += special[Math.floor(math.random() * special.length)];
        break;
      default:
        break;
    }

  }
  return password;

}

function charType(passwordLength) {
  // switch statement based on charType selected
  // generate appropriate password based on charType
  var typeSelection = window.prompt(
    "Please select a number from the following selection: "
  );

  typeSelection = parseInt(typeSelection);
  // use switch to carry out action
  switch (typeSelection) {
      case 1: // lowercase
          var typeChoices = [1];
          password = createPassword(passwordLength, typeChoices);
          break;
      case 2: // uppercase
          var typeChoices = [2];
          password = createPassword(passwordLength, typeChoices);
          break;
      case 3: // numeric
          var typeChoices = [3];
          password = createPassword(passwordLength, typeChoices);
          break;
      case 4: // special characters
          var typeChoices = [4];
          password = createPassword(passwordLength, typeChoices);
          break;
      case 5: // lowercase + uppercase
          var typeChoices = [1, 2];
          password = createPassword(passwordLength, typeChoices);
          break;
      case 6: // lowercase + numeric
          var typeChoices = [1, 3];
          password = createPassword(passwordLength, typeChoices);
          break;
      case 7: // lowercase + special char
          var typeChoices = [1, 4];
          password = createPassword(passwordLength, typeChoices);
          break;
      case 8: // uppercase + numeric
          var typeChoices = [2, 3];
          password = createPassword(passwordLength, typeChoices);
          break;
      case 9: // uppercase + special char
          var typeChoices = [2, 4];
          password = createPassword(passwordLength, typeChoices);
          break;
      case 10: // numeric + special char
          var typeChoices = [3, 4];
          password = createPassword(passwordLength, typeChoices);
          break;
      case 11: // lowercase + uppercase + numeric
          var typeChoices = [1, 2, 3];
          password = createPassword(passwordLength, typeChoices);
          break;
      case 12: // lowercase + uppercase + special char
          var typeChoices = [1, 2, 4];
          password = createPassword(passwordLength, typeChoices);
          break;
      case 13: // lowercase + numeric + special char
          var typeChoices = [1, 3, 4];
          password = createPassword(passwordLength, typeChoices);
          break;
      case 14: // uppercase + numeric + special char
          var typeChoices = [2, 3, 4];
          password = createPassword(passwordLength, typeChoices);
          break;
      case 15: // lowercase + uppercase + numeric + special char
          var typeChoices = [1, 2, 3, 4];
          password = createPassword(passwordLength, typeChoices);
          break;
      default:
          window.alert("You did not pick a valid option. Try again.")

          // call charType again to force player to pick a valid option
          charType();
          break;
  }
  return password;
}

function generatePassword() {
  var passwordLength = charCount();
  var password = charType(passwordLength);
  return password;
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
