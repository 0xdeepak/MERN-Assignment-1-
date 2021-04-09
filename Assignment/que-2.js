//  2.	Write the pseudocode & a program to calculate the simple interest 
//      based on the inputs(amount, rate, time) provided by the user.

let readlineSync = require('readline-sync')
let amount = readlineSync.question('Enter amount: ');
let rate = readlineSync.question('Enter rate: ');
let time = readlineSync.question('Enter time: ');

function Si(amount, rate, time){
    let si = (amount * rate * time) / 100;
    console.log("Simple Interest is: " + si);
}

Si(amount, rate, time);
