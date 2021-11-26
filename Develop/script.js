// Assignment code here


// Get references to the #generate element, this var ties us to Generate Password button.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  window.alert("Before we begin let's set a few parameters first.");
  var length = prompt("Set a length for your password, must be between 8 and 128 characters.");
  if (length > 8 && length < 128){alert('Excellent, your password is ' + length + ' characters long.')}
  else if (length < 8 || length > 128){prompt('Set a length for your password, must be between 8 and 128 characters.')};

  var passwordText = document.querySelector("#password")

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
