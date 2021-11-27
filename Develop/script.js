// Assignment code here
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = 1234567890
var specialCharacters = "!@#$%^&*()~<>?/"

// Get references to the #generate element, this var ties us to Generate Password button.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  window.alert("Before we begin let's set a few parameters first.");
  //why will putting in a single letter work here.
  var length = prompt("Set a length for your password, must be between 8 and 128 characters.");
  if (8 < length < 128){alert('Excellent, your password is ' + length + ' characters long.')}
  else if (length < 8 || length > 128){prompt('Set a length for your password, must be between 8 and 128 characters.')};
  
  window.alert("Excellent job! Now let's figure which character types to use.");
  
  var upperLower = prompt("Would you like to use both upper and lowercase? Or, would you rather use one or the other?");
  if (upperLower === "both" || upperLower === "BOTH"){
    characters = ('abcdefghijklmnopqrstuvwxyz') || (ABCDEFGHIJKLMNOPQRSTUVWXYZ);
    alert("You have selected both upper and lowercase.")
  }
  else if (upperLower === "lowercase" || upperLower === "LOWERCASE"){
    characters = ('abcdefghijklmnopqrstuvwxyz');
    alert("You have selected lowercase only.")}
  else if (upperLower === "uppercase" || upperLower === "UPPERCASE"){
    characters = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    alert("You have selected uppercase only.");
  };

  window.alert("Good job! Just a couple more questions.")
// how to get second alert to not show.
  var numbers = prompt("Would you like to include numbers in your password?");
  if (numbers === "yes" || numbers === "YES"){
    numbers = 1234567890;
    alert("You have chosen to use numbers in your password.")
  }
  else (numbers === "no" || numbers === "NO" );{
    numbers === undefined;
    alert("You have chosen not to use numbers in your password.")
  }

  var passwordText = document.querySelector("#password")

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
