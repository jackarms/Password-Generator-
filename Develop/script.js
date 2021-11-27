// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specialCharacters = "!@#$%^&*()~<>?/"

// Get references to the #generate element, this var ties us to Generate Password button.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  window.alert("Before we begin let's set a few parameters first.");
  
  var length = window.prompt("Set a length for your password, it must be between 8 and 128 characters.");
    if (length > 8 && length < 128)
    {alert('Excellent, your password is ' + length + ' characters long.')}
    else if (length < 8 || length > 128)
    {prompt('Set a length for your password, must be between 8 and 128 characters.')};
  console.log(length)
  window.alert("Excellent job! Now let's figure which character types to use.");
  
  var promptLetters = window.prompt("Would you like to use upperCase, lowerCase, or both in your password?");
  if (promptLetters === "both" || promptLetters === "BOTH"){
    promptLetters = lowerCase + upperCase
    alert("You have selected both upper and lowercase.")
  }
  else if (promptLetters === "lowercase" || promptLetters === "LOWERCASE"){
    promptLetters = lowerCase
    alert("You have selected lowercase only.")}
  else if (promptLetters === "uppercase" || promptLetters === "UPPERCASE"){
    promptLetters = upperCase
    alert("You have selected uppercase only.");
  };
  console.log(promptLetters);

  window.alert("Good job! Just a couple more questions.");
  
  var confirmNumbers = window.confirm("Would you like to use numbers in your password?");
  if(confirmNumbers == true){
    confirmNumbers = numbers
    alert("You have chosen to use numbers.")}
    else{alert("You have chosen not to use numbers.")};
  console.log(confirmNumbers)
  
  var confirmCharacters = window.confirm("Would you like to use special characters in your password?");
  if(confirmCharacters == true){
    confirmCharacters = specialCharacters
    alert("You have chose to use special characters.")}
    else{alert("You chosen not to use special characters.")};
  console.log(confirmCharacters)
  
  var passwordText = document.querySelector("#password")

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
