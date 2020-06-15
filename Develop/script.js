// Assignment code here
var pwlenGth = (pwlenGth >= 8 && pwLength <= 128);
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numBers = ["0", "1", "2", "3", "4", "5","6", "7", "8", "9"];
var specialCharacters = ["U+0021", "U+0023", "U+0024", "U+0025", "U+0026", "U+0040"];


    
window.alert("Please choose your password criteria.")
    
      //password length criteria
      var pwlenGth = function() {
        for () {
          window.prompt("Choose the length of your password. (It must be a minimum of 8 charactors and a maximum of 128 characters in length).");
          if (pwLength < 8) {
            window.alert("Please choose a length of at least 8 characters!");
          }
          else if (pwLength > 128) {
            window.alert("Please choose a length no more that 128 characters!")
          }
        }
      }
      //verify Uppercase 'yes' or 'no'
      var upperCase = function() {
        for (var i = 0; i < pwUppercase.length; i+(i+25)) {
          window.prompt("Would you like to include Upper case letters? Type 'Yes' or 'No'");
          if (pwUppercase === "Yes" || pwUppercase === "YES" || pwUppercase === "yes") {
            //link to generatebtn somehow
            console.log("yes");
          }
          else {
            console.log("no")
          }
        }
      }

      var lowerCase = function() {
        for (var i = 0; i < pwUppercase.length; i+(i+25)) {
          window.prompt("Would you like to include lower case letters? Type 'Yes' or 'No'");
          if (pwLowercase === "Yes" || pwLowercase === "YES" || pwLowercase === "yes") {
            //link to generate button 
            console.log("yes");
          }
          else {
            console.log("no")
          }
        } 
      }
      //choose if want to add numbers to password
      var numBers = function() {
        for (var i = 0; i < pwUppercase.length; i+(i+9)) {
          window.prompt("Would you like to include numbers? Type 'Yes' or 'No'");
          if (pwLowercase === "Yes" || pwLowercase === "YES" || pwLowercase === "yes") {
            console.log("yes");
          }
          else {
            console.log("no")
          }
        }
      }

      var specialCharacters = function() {
        for (var i = 0; i < pwUppercase.length; i+(i+5)) {
          window.prompt("Would you like to include special characters? (i.e. @ $ % etc...) Type 'Yes' or 'No'");
          if (specialCharacters === "Yes" || specialCharacters === "YES" || specialCharacters === "yes") {
            console.log("yes")
          }
          else {
            //if they do not choose a special character
            window.alert("Please choose at least 1 special character!");
          }
        }
      }
    }  
  }
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
