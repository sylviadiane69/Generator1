function generatePassword(charset, length) {
  var length = 8
  var retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function writePassword() {
  // Write password to the #password input

  const length = parseInt(prompt("What length do you want your password?"))
  // check length

  //Confirm Password meets length criteria
  if (length < 8 || length > 128) {
    alert("Password must be a minimum of 8 characters.");
    return
  }

  var character = ""
  const useSymbols = confirm("Do you want your password to use a symbol?")
  if(useSymbols) {
    character += "!@#$%&*"
  }
  const useLowerCase = confirm("Do you want your password to use a lower case letter?")
  if(useLowerCase) {
    character += "abcdefghijklmnopqrstuvwxyz"
  }
  const useNumbers = confirm("Do you want your password to use a number?")
  if(useNumbers) {
    character += "0123456789"
  }
  const useUpperCase = confirm("Do you want your password to use an upper case letter?")
  if(useUpperCase) {
    character += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  

  var password = generatePassword(character, length);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
