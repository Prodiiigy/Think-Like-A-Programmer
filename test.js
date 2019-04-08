var number = 123456789;
output = [];
sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i++) { 
    output.push(+sNumber.charCodeAt(i) - +sNumber.charCodeAt(0));
}
console.log(output);
