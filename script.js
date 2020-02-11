
// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables for password
var low = "abcdefghijklmnopqrstuvwxyz";
var upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "!@#$%^&*+=";

//Console for passwords
console.log(low.length);
console.log(upp.length);
console.log(num.length);
console.log(sym.length);

//Ask user for lenght of password

var passwordLength = prompt("How many characters in your password?");

// Prompt for options 

var low = prompt("Do you want a lower case letter?");

const useLow = confirm("Do you want a lower case letter?");
  if(useLow) {
    characters += "abcdefghijklmnopqrstuvwxyz"
  }

var upp = prompt("Do you want a upper case letter?");

  const useUpp = confirm("Do you want an upper case letter?");
    if(useUpp) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
  
  var num = prompt("Do you want a number?");

    const useNum = confirm("Do you want a number?");
      if(useNum) {
        characters += "0123456789"
      }

  var sym = prompt("Do you want a symbol?");
      if(useSym) {
        characters += "!@#$%^&*+="
      }
 
// Length set for password
       if (length < 8 || length > 128) {
        alert("Length of password must contain 8 characters.");
      }

// Array of all characters
  var characters = ["low", "upp", "num", "sym"];

// Functions to generate passwords
  function generatePassword(characters, length) {
    return Math.floor(Math.random() * 72);
  }

// Insuring password meets requirements
function writePassword() {
  var password = generatePassword(characters, length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{

}
