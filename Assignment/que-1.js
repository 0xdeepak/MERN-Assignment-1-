/*  1.	Write the pseudocode & a program to input credits of a Code for Cause Campus leader and then output the badge of the lead on the basis of the following criteria: 
    a.	7500 <= credits : Tera leader 
    b.	6000 <= credits < 7500 : Gega leader 
    c.	4500 <= credits < 6000 : Mega leader 
    d.	Credits < 4500 : Rising Star 
*/


let readlineSync = require('readline-sync');        
var credits = readlineSync.question('Enter credits for the CFC Campus Leader: ');
var badge;

if(credits < 4500){
    badge = "Rising Star";
}
else if(credits >= 4500 && credits < 6000){
    badge = "Mega leader";
}
else if(credits >= 6000 && credits < 7500){
    badge = "Gega leader";
}
else if(credits >= 7500){
    badge = "Tera leader";
}

console.log("Badge: " + badge);