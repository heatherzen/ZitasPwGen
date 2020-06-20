// Assignment code here
var lenGth = (lenGth >=8, lenGth <=128);
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
var numBers = "0123456789";
var specialCharacters = "!@#$%&*";


    
window.alert("Please choose your password criteria.")
    
    
      //password length criteria
      window.prompt("Choose the length of your password. (It must be a minimum of 8 charactors and a maximum of 128 characters in length).");
      function lenGth() { 
        
        for (var i = 8; i<= 128; i++) {
          
          if (lenGth < 8) {
            window.alert("Please choose a length of at least 8 characters!");
          }
          else if (lenGth > 128) {
            window.alert("Please choose a length no more that 128 characters!")
          }
          console.log(lenGth);
        }
      }
      
      //verify Uppercase 'yes' or 'no'
    window.prompt("Would you like to include Upper case letters? Type 'Yes' or 'No'");
      function upperCase() {
        for (var i = 0; i < upperCase; i++) {
          if (upperCase === "Yes" || upperCase === "YES" || upperCase === "yes") {
            //link to generatebtn somehow
            console.log("yes");
          }
          else {
            console.log("no");
            break;
          }
          console.log(upperCase);
        }
      }

    window.prompt("Would you like to include lower case letters? Type 'Yes' or 'No'");
      function lowerCase() {
        for (var i = 0; i < lowerCase; i++) {
          if (lowerCase === "Yes" || lowerCase === "YES" || lowerCase === "yes") {
            //link to generate button 
            console.log("yes");
          }
          else {
            console.log("no");
            break;
          }
          console.log(lowerCase);
        } 
      }
      //choose if want to add numbers to password
      
    window.prompt("Would you like to include numbers? Type 'Yes' or 'No'");
      function numBers() {
        for (var i = 0; i < numBers.length; i++) {
          if (numBers === "Yes" || numBers === "YES" || numBers === "yes") {
            console.log("yes");
          }
          else {
            console.log("no");
            break;
          }
          console.log(numBers);
        }
      }

    window.prompt("Would you like to include special characters? (i.e. @ $ % etc...) Type 'Yes' or 'No'");
      function specialCharacters() {
        for (var i = 0; i < specialCharacters.length; i++) {
          if (specialCharacters === "Yes" || specialCharacters === "YES" || specialCharacters === "yes") {
            console.log("yes")
          }
          else {
            //if they do not choose a special character
            window.alert("Please choose at least 1 special character!");
          }
          console.log(specialCharacters);
        }
      }


  function finalString(u,l,n,s) {
      if(u) {
        x += upperCase;
      };

      if(l) {
        x += lowerCase;
      };

      if(n) {
        x += numBers;
      };

      if(s) {
        x += specialCharacters;
      };

    return x;
  }

  function generatePassword() {
    var x = "";
      for (i = 0; i < lenGth; i++) {
        x += finalString(Math.floor(Math.random() *finalString.length));
      }
  }
      
   
generatePassword();

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
