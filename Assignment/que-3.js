let readlineSync = require('readline-sync');

var first = readlineSync.question('Enter first no:  ');
var second = readlineSync.question('Enter second no: ');

function gcd(first, second){
    if(second == 0){
        return first;
    }
    else{
        return gcd(second, first % second);
    }
}

console.log("GCD for "+ first +" and "+ second +" is: "+ gcd(first, second));