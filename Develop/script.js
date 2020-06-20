// Assignment code here

var upperCase = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var lowerCase = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var numBers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","$","%","&","*"];
var guarenteedCharacters = [];
var availableCharacters = [];


function generatePassword() {

  var pwLength = 0;

  while (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    pwLength = prompt("Choose the length of your password. (It must be a minimum of 8 charactors and a maximum of 128 characters in length).");
    console.log(pwLength);
  }

  var upper = confirm("Would you like to include Upper case letters?");
  var lower = confirm("Would you like to include lower case letters?");
  var num = confirm("Would you like to include numbers?");
  var special = confirm("Would you like to include special characters?");

  if (upper) {
    guarenteedCharacters.push(randomize(upperCase));
    availableCharacters.push(upperCase);
  }
  if (lower) {
    guarenteedCharacters.push(randomize(lowerCase));
    availableCharacters.push(lowerCase);
  }
  if (num) {
    guarenteedCharacters.push(randomize(numBers));
    availableCharacters.push(numBers);
  }
  if (special) {
    guarenteedCharacters.push(randomize(specialCharacters));
    availableCharacters.push(specialCharacters);
  }
  
  for (var i = guarenteedCharacters.length + 1; i < pwLength; i++) {
    guarenteedCharacters.push(randomize(availableCharacters));
  }

  return guarenteedCharacters.join("");
}

function randomize(characterString) {
  var randomIndex = Math.floor(Math.random() * characterString.length);
  return characterString[randomIndex]
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
