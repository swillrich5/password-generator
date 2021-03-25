// Assignment Code
var specialCharacters = [" ", "!",'"', "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]; 
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ];
var specialCharactersString = "!''#$%&'()*+-./:;<=>?@[\\]^_`{|}~";
var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
var uppercaseString = lowercaseString.toUpperCase();
var numberString = "0123456789";
var passwordCharacters = "";
var passwordString = "";


console.log("special characters = " + specialCharactersString);
console.log("Lowercase Letters = " + lowercaseString);
console.log("Uppercase Letters = " + uppercaseString);
console.log("Numbers = " + numberString);

function generatePassword() {

}


var passwordLength = prompt("Password Length (0 to 128 characters):","8");
console.log("Password Length = " + passwordLength);




var specialCharactersYN = confirm("Include special characters? ");
console.log("Include special characters = " + specialCharactersYN);
if (specialCharactersYN) {
  passwordCharacters = passwordCharacters + specialCharactersString;
  console.log("passwordCharacters = " + passwordCharacters);
}


var lowercaseYN = confirm("Include lowercase letters? ");
console.log("Include lowercase letters = " + lowercaseYN);
if (lowercaseYN) {
  passwordCharacters = passwordCharacters + lowercaseString;
  console.log("passwordCharacters = " + passwordCharacters);
}


var uppercaseYN = confirm("Include uppercase letters? ");
console.log("Include uppercase letters = " + uppercaseYN);
if (uppercaseYN) {
  passwordCharacters = passwordCharacters + uppercaseString;
  console.log("passwordCharacters = " + passwordCharacters);
}

var numbersYN = confirm("Include numbers? ");
console.log("Include numbers = " + numbersYN);
if (numbersYN) {
  passwordCharacters = passwordCharacters + numberString;
  console.log("passwordCharacters = " + passwordCharacters);
}


var randomNumber = Math.floor(Math.random() * passwordCharacters.length);
for (var i = 0; i < passwordLength; i++) {
  passwordString = passwordString + passwordCharacters.charAt(randomNumber);
  var randomNumber = Math.floor(Math.random() * passwordCharacters.length);
}
console.log("Password String = " + passwordString);


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordText.value = passwordString;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
