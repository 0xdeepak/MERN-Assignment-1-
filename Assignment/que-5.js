let readlineSync = require('readline-sync');

var num = readlineSync.question('Enter the number: ');
var digits = 0;
while(num > 1){
    digits += 1;
    num /= 10;
}

console.log(digits);