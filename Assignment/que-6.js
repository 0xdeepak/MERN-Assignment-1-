let readlineSync = require('readline-sync');

var num = readlineSync.question('Enter a number: ');
var rev = 0;
var rem;

while(num > 1){
    rem = num % 10;
    rev = rev * 10 + rem;
    num = (num - rem)/ 10;
}

console.log(rev);
