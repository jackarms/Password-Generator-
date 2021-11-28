// Assignment code here
let masterArray = [];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var specialCharacters = ['!','@','#','$','%','^','&','*'];
let length;

var generateBtn = document.querySelector("#generate");

function writePassword() {
  window.alert("Before we begin let's set a few parameters first.");
  
  let length = window.prompt("Set a length for your password, it must be between 8 and 128 characters.");
    if (length > 8 && length < 128)
    {alert('Excellent, your password is ' + length + ' characters long.')}
    else if (length < 8 || length > 128)
    {prompt('Set a length for your password, must be between 8 and 128 characters.')};
  console.log(length)
  window.alert("Excellent job! Now let's figure which character types to use.");
  
  var promptLetters = window.prompt("Would you like to use upperCase, lowerCase, or both in your password?");
  if (promptLetters === "both" || promptLetters === "BOTH"){
    var both = lowerCase + upperCase
    if(both == true){masterArray.push(...lowerCase, ...upperCase,)}
    alert("You have selected both upper and lowercase.")
  }
  else if (promptLetters === "lowercase" || promptLetters === "LOWERCASE"){
    var lower = lowerCase
    if(lower = lowerCase){masterArray.push(...lowerCase)}
    alert("You have selected lowercase only.")}
  else if (promptLetters === "uppercase" || promptLetters === "UPPERCASE"){
    var upper = upperCase
    if(upper == upperCase){masterArray.push(...upperCase)}
    alert("You have selected uppercase only.");
  };
  console.log(promptLetters);

  window.alert("Good job! Just a couple more questions.");
  
  var pickNumbers = window.confirm("Would you like to use numbers in your password?");
  if(pickNumbers == true){
    var confirmNumbers = numbers
    if(confirmNumbers == numbers){masterArray.push(...numbers)}
    alert("You have chosen to use numbers.")}
    else{alert("You have chosen not to use numbers.")};
  console.log(pickNumbers)
  
  var confirmCharacters = window.confirm("Would you like to use special characters in your password?");
  if(confirmCharacters == true){
    var characters = specialCharacters
    if(characters == specialCharacters){masterArray.push(...specialCharacters)}
    //if(characters == specialCharacters){masterArray=masterArray.concat(specialCharacters)}
    alert("You have chose to use special characters.")}
    else{alert("You chosen not to use special characters.")};
  console.log(confirmCharacters)
  
  var passwordText = document.querySelector("#password")
console.log(masterArray)
let password = []
for(let i = 0; i < length; i ++){
  if(masterArray && password.length < length){
    let char = masterArray[Math.floor(Math.random()*masterArray.length)]
    password.push(char)
    console.log(password)
  }
}

passwordText.value = password

}










// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

