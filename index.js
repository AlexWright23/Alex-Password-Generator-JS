var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()-_";

// Write password to the #password input
function generatePassword() {
	var globalSet = "";
	var generatePassword = '';

var passwordLength = window.prompt("Please write a password that is at least 8 charecters long and no longer than 128 charecters");
if (passwordLength < 8 || passwordLength > 128 || passwordLength === NaN) {
	alert ("Password invaild.");
	generatePassword();
}
else {
	var lowerCaseAns = window.confirm("Your password will include lower case letters.");
	var upperCaseAns = window.confirm("Your password will include upper case letters.");
	var numbersAns = window.confirm("Your password will include numbers.");
	var symbolsAns = window.confirm("Your password will include symbols.");
	if (lowerCaseAns == true) {
		globalSet += lowerCase;
	}
	if (upperCaseAns == true) {
		globalSet += upperCase;
	}
	if (numbersAns == true) {
		globalSet += numbers;
	}
	if (symbolsAns == true) {
		globalSet += symbols;
	}
	console.log(globalSet)

	for (var i = 0; i < passwordLength; i++) {
		let currentChar = Math.floor(Math.random() * globalSet.length)
		generatePassword += globalSet[currentChar];
	}
	return generatePassword
	}
};

function writePassword() {
  var password = generatePassword();
  var passwordText =  document.querySelector("#password");
  
  passwordText.value = password
};





 // var password = generatePassword();
  //var passwordText = document.querySelector("#password");


 // passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
