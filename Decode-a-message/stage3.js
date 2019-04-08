var modeType = [
   'UPPERCASE',
   'LOWERCASE',
   'PUNCTUATION'
]
var number;
var mode = modeType[0];
console.log("Enter some numbers ending with -1: ");
do { 
   number = prompt();
   number = parseInt(number);
   switch (mode) { 
     case modeType[0]:
        number = number % 27;
        console.log(". Modulo 27: " + number + ". ");
        if (number == 0) { 
           console.log("Switch to LOWERCASE");
           mode = modeType[1];
        }
           break;
     case modeType[1]:
          number = number % 27;
          console.log(". Modulo 27: " + number + ". ");
          if (number == 0) { 
             console.log("Switch to PUNCTUATION");
             mode = modeType[2];
          }
          break;
     case modeType[2]:
        number = number % 9;
        console.log(". Modulo 9: " + number + ". ");
        if (number == 0) { 
           console.log("Switch to UPPERCASE");
           mode = modeType[0];
        }
        break;
   }
   console.log("\n");
}while (number != -1);