// Variables for password composition characters
var characterLength = 8;
var choiceArray = [];

// Arrays of possible characters to be included in the password
var specialCharactersArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '?',];
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]; 
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArray = ['1','2','3','4','5','6','7','8','9','0'];


// Write password to the #password input
function writePassword() {
  var correctPrompts = getUserprompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts){ // If the promts have been returned correctly, run the password generator function
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

// Password generator function with for loop
function generatePassword(){
  var password = "";

  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password; 
}

// Series of user promts to determine length and type of characters included 
function getUserprompts(){
  choiceArray = [];
  characterLength = parseInt(prompt("How many characters will the password be? (Range is 8 - 128 characters)."))
 
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) { // check char length is correct value range
    alert("Character must be an integer between 8 and 128")
    return false
  }
  if(confirm("Would you like lowercase letters included in the password?")){ // lower case
    choiceArray = choiceArray.concat(lowerCaseArray);
  }
  if(confirm("Would you like uppercase letters included in the password?")){ // upper case
    choiceArray = choiceArray.concat(upperCaseArray);
  }
  if(confirm("Would you like numbers included in the password?")){ // numbers
    choiceArray = choiceArray.concat(numberArray);
  }
  if(confirm("Would you like special characters included in the password?")){ // special characters
    choiceArray = choiceArray.concat(upperCaseArray);
  }
  return true; 
}



// Get references to the #generate element (existing code)
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button (existing code)
generateBtn.addEventListener("click", writePassword);
