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
        alert("Length of password is accepted as " + passwordLength + " characters.");
        isLengthValid = true;
      break;
    } else {
      alert("Invalid password length. Please provide password length of at least 8 characters long and no more than 128 characters.")
    }
  }
  
  return passwordLength;
}

function createPassword(passwordLength, typeChoices) {
  password = "";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = " !#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

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
        password += special[Math.floor(Math.random() * special.length)];
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

  var type1 = "1: lowercase";
  var type2 = "2: uppercase";
  var type3 = "3: numeric";
  var type4 = "4: special characters";
  var type5 = "5: lowercase + uppercase";
  var type6 = "6: lowercase + numeric";
  var type7 = "7: lowercase + special character";
  var type8 = "8: uppercase + numeric";
  var type9 = "9: uppercase + special character";
  var type10 = "10: numeric + special character";
  var type11 = "11: lowercase + uppercase + numeric";
  var type12 = "12: lowercase + uppercase + special character";
  var type13 = "13: lowercase + numeric + special character";
  var type14 = "14: uppercase + numeric + special character";
  var type15 = "15: lowercase + uppercase + numeric + special character";

  var isCharType = false;

  while(isCharType === false) {
    var typeCode = window.prompt(
      "Please select a number from the following selection: \n" +
      type1 + "\n" +
      type2 + "\n" +
      type3 + "\n" +
      type4 + "\n" +
      type5 + "\n" +
      type6 + "\n" +
      type7 + "\n" +
      type8 + "\n" +
      type9 + "\n" +
      type10 + "\n" +
      type11 + "\n" +
      type12 + "\n" +
      type13 + "\n" +
      type14 + "\n" +
      type15 + "\n"
    );

    // if typeSelection is not 1-15, inform user and prompt again
    typeSelection = parseInt(typeCode);

    // THIS SHOULD BE REPLACED BY THE SWITCH DEFAULT
    if (typeSelection >= 1 && typeSelection <= 15) {
      isCharType = true;
    } else {
      alert("Invalid response of " + typeSelection + " . Please choose a response between 1-15.");
      continue;
    }

    // use switch to carry out action
    switch (typeSelection) {
      case 1: // lowercase
        alert("You have selected " + type1);
        var typeChoices = [1];
        password = createPassword(passwordLength, typeChoices);
        break;
      case 2: // uppercase
        alert("You have selected " + type2);
        var typeChoices = [2];
        password = createPassword(passwordLength, typeChoices);
        break;
      case 3: // numeric
        alert("You have selected " + type3);
        var typeChoices = [3];
        password = createPassword(passwordLength, typeChoices);
        break;
      case 4: // special characters
        alert("You have selected " + type4);
        var typeChoices = [4];
        password = createPassword(passwordLength, typeChoices);
        break;
      case 5: // lowercase + uppercase
        alert("You have selected " + type5);
        var typeChoices = [1, 2];
        password = createPassword(passwordLength, typeChoices);
        break;
      case 6: // lowercase + numeric
        alert("You have selected " + type6);
        var typeChoices = [1, 3];
        password = createPassword(passwordLength, typeChoices);
        break;
      case 7: // lowercase + special char
        alert("You have selected " + type7);
        var typeChoices = [1, 4];
        password = createPassword(passwordLength, typeChoices);
        break;
      case 8: // uppercase + numeric
        alert("You have selected " + type8);
        var typeChoices = [2, 3];
        password = createPassword(passwordLength, typeChoices);
        break;
      case 9: // uppercase + special char
        alert("You have selected " + type9);
        var typeChoices = [2, 4];
        password = createPassword(passwordLength, typeChoices);
        break;
      case 10: // numeric + special char
        alert("You have selected " + type10);
        var typeChoices = [3, 4];
        password = createPassword(passwordLength, typeChoices);
        break;
      case 11: // lowercase + uppercase + numeric
        alert("You have selected " + type11);
        var typeChoices = [1, 2, 3];
        password = createPassword(passwordLength, typeChoices);
        break;
      case 12: // lowercase + uppercase + special char
        alert("You have selected " + type12);
        var typeChoices = [1, 2, 4];
        password = createPassword(passwordLength, typeChoices);
        break;
      case 13: // lowercase + numeric + special char
        alert("You have selected " + type13);
        var typeChoices = [1, 3, 4];
        password = createPassword(passwordLength, typeChoices);
        break;
      case 14: // uppercase + numeric + special char
        alert("You have selected " + type14);
        var typeChoices = [2, 3, 4];
        password = createPassword(passwordLength, typeChoices);
        break;
      case 15: // lowercase + uppercase + numeric + special char
        alert("You have selected " + type15);
        var typeChoices = [1, 2, 3, 4];
        password = createPassword(passwordLength, typeChoices);
        break;
      default:
        window.alert("Invalid response of " + typeSelection + " . Please choose a response between 1-15.");
        continue;
    }
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
