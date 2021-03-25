// Assignment Code
// getPasswordLength() asks the user for the length of the password they
// want generated.  It's broken out to perform error checking - valid number 
// and length between 0 and 128
function getPasswordLength() {
  var done = false;
  while (!done) {
    var passwordLength = prompt("Password Length (8 to 128 characters):","8");
    if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128) {
        return passwordLength;
      } else {
          alert("Please enter a number between 8 and 128 for the password length");
    }
  }
};

// Generates the password and returns it to the writePassword() 
// function for displaying.  Also, if no characters sets are selected,
// an error message is displayed.
function generatePassword() {
  var specialCharactersString = "!''#$%&'()*+-./:;<=>?@[\\]^_`{|}~";
  var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseString = lowercaseString.toUpperCase();
  var numberString = "0123456789";
  var passwordCharacters = "";
  var passwordString = "";    
  var passwordLength = getPasswordLength();
  var specialCharactersYN = confirm("Include special characters? ");  // do we want special chars?
  var lowercaseYN = confirm("Include lowercase letters? ");           // do we want lowercase?
  var uppercaseYN = confirm("Include uppercase letters? ");           // do we want uppercase?
  var numbersYN = confirm("Include numbers? ");                       // do we want numbers?

  // add in the character sets the user selected
  if (specialCharactersYN) {
    passwordCharacters = passwordCharacters + specialCharactersString;
  }
  if (lowercaseYN) {
    passwordCharacters = passwordCharacters + lowercaseString;
  }
  if (uppercaseYN) {
    passwordCharacters = passwordCharacters + uppercaseString;
  }
  if (numbersYN) {
    passwordCharacters = passwordCharacters + numberString;
  }

  var randomNumber = Math.floor(Math.random() * passwordCharacters.length);
  for (var i = 0; i < passwordLength; i++) {
    passwordString = passwordString + passwordCharacters.charAt(randomNumber);
    randomNumber = Math.floor(Math.random() * passwordCharacters.length);
  }

  if (passwordString === "") {
    alert("No character sets included for password creation.  Please try again.");
    return("No character set selected - please try again");
  }
  return passwordString;
}

// grabs the "Generate Password" button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
