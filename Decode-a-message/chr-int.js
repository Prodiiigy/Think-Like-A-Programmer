console.log("Enter a number 1-26: ");
var number;
var chr = 'A';
number = prompt();
number = parseInt(number);
var outputCharacter;
outputCharacter = number + (chr.charCodeAt(0)) - 1;
console.log("Equivalent symbol: " + outputCharacter + "\n");