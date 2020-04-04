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
      case 3: // concat numeric to password
        password += numeric[Math.floor(Math.random() * numeric.length)];
      case 4: // concat special char to password
        password += special[Math.floor(math.random() * special.length)];
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
          playerInfo.upgradeAttack();
          break;
      case 3: // numeric
          window.alert("Leaving the store.");
          break;
      case 4: // special characters
          playerInfo.refillHealth();
          break;
      case 5: // lowercase + uppercase
          playerInfo.upgradeAttack();
          break;
      case 6: // lowercase + numeric
          window.alert("Leaving the store.");
          break;
      case 7: // lowercase + special char
          playerInfo.refillHealth();
          break;
      case 8: // uppercase + numeric
          playerInfo.upgradeAttack();
          break;
      case 9: // uppercase + special char
          window.alert("Leaving the store.");
          break;
      case 10: // numeric + special char
          playerInfo.refillHealth();
          break;
      case 11: // lowercase + uppercase + numeric
          playerInfo.upgradeAttack();
          break;
      case 12: // lowercase + uppercase + special char
          window.alert("Leaving the store.");
          break;
      case 13: // lowercase + numeric + special char
          playerInfo.refillHealth();
          break;
      case 14: // uppercase + numeric + special char
          playerInfo.refillHealth();
          break;
      case 15: // lowercase + uppercase + numeric + special char
          playerInfo.refillHealth();
          break;
      default:
          window.alert("You did not pick a valid option. Try again.")

          // call shop() again to force player to pick a valid option
          shop();
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
