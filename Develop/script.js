// Assignment code here
var lenGth = "";
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
var numBers = "0123456789";
var specialCharacters = "!@#$%&*";


    
window.alert("Please choose your password criteria.")
    
    funtion generateBtn() {
      //password length criteria
      var lenGth() {
        for (var i = 8; i<= 128; i++) {
          window.prompt("Choose the length of your password. (It must be a minimum of 8 charactors and a maximum of 128 characters in length).");
          if (pwLength < 8) {
            window.alert("Please choose a length of at least 8 characters!");
          }
          else if (pwlength > 128) {
            window.alert("Please choose a length no more that 128 characters!")
          }
          console.log(pwlenGth);
        }
      }
      
      //verify Uppercase 'yes' or 'no'
      
        for (var i = 0; i < upperCase.length; i++) {
          var upperCase = math.floor(math.random() *25 +1)
          console.log(upperCase);
          window.prompt("Would you like to include Upper case letters? Type 'Yes' or 'No'");
          if (upperCase === "Yes" || upperCase === "YES" || upperCase === "yes") {
            //link to generatebtn somehow
            console.log("yes");
          }
          else {
            console.log("no");
          }
        }
      

      
        for (var i = 0; i < lowerCase.length; i++) {
          var lowerCase = math.floor(math.random() *25 +1)
          console.log(lowerCase);
          window.prompt("Would you like to include lower case letters? Type 'Yes' or 'No'");
          if (lowerCase === "Yes" || lowerCase === "YES" || lowerCase === "yes") {
            //link to generate button 
            console.log("yes");
          }
          else {
            console.log("no");
          }
        } 
      
      //choose if want to add numbers to password
      
        for (var i = 0; i < numBers.length; i++) {
          var numBers = math.floor(math.random() *10)
          console.log(numBers);
          window.prompt("Would you like to include numbers? Type 'Yes' or 'No'");
          if (numBers === "Yes" || numBers === "YES" || numBers === "yes") {
            console.log("yes");
          }
          else {
            console.log("no");
          }
        }
      

      
        for (var i = 0; i < specialCharacters.length; i++) {
          var specialCharacters = math.floor(math.random() *6)
          console.log(specialCharacters);
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
