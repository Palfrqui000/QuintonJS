// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] 
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var spechChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=']
  var selected = []
  
  
  var passwordLengt = getPassLength();

  var characterType = false;
  while (characterType == false) {
    var lowerCase = getUserChoices(' Lower Case Letters?');
    var upperCase = getUserChoices(' Upper Case Letters?');
    var wantNumber = getUserChoices(' Numbers?');
    var wantSpecial = getUserChoices(' Special Characters?');
    if ((lowerCase) || (upperCase) || (wantNumber) || (wantSpecial)) {
      characterType = true;
    } else {window.alert ('Must select 1 character type!!!')}
  }
  if (lowerCase) {
    selected = selected.concat(lowerCaseLetters)
 }
  if (upperCase) {
    selected = selected.concat(upperCaseLetters)
}
  if (wantNumber) {
    selected = selected.concat(numbers)
}
  if (wantSpecial) {
    selected = selected.concat(spechChar)
}

var password = ''
for (i=0; i < passwordLengt; i++) {
  password += selected[Math.floor(Math.random() * (selected.length))];
}
console.log (password);
return password;


function getPassLength() {
  var userInput = 0;
  while ((userInput < 8) || (userInput > 128)) {
    userInput = parseInt (window.prompt('Enter the password length between 8 and 128'));
  if (isNaN(userInput)){
    userInput = 0;

    }  
  }
  return userInput;
}


function getUserChoices(options) {
  var userChoice = 'a';
  var windowPrompt = ('Do you want'.concat(options));
  windowPrompt = windowPrompt .concat(' (y/n)?')
  while (userChoice = 'a') {
    userChoice = (window.prompt(windowPrompt));
    userChoice = userChoice.toLowerCase();
    if (userChoice == 'y') {
      return true;
    } else if(userChoice == 'n') {
      return false;
    }
  }
}

}






