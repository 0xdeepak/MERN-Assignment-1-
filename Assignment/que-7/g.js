let readlineSync = require('readline-sync');
var n = readlineSync.question("Enter size of pattern: ");   //works perfect for even numbers i.e. 10 

let rmirr; let mid = Math.ceil(n/2);
for(let row = 1; row <= n; row++){
    
    if(row <= parseInt(mid)){
        rmirr = row;
    }
    else{
        rmirr = n-row;
    }
    for(let col =1; col <=rmirr; col++){
        process.stdout.write("*  ");
    }
    for(let col=1; col <= mid-rmirr; col++){
        process.stdout.write("   ");
    }
    for(let col=1; col <= mid-rmirr; col++){
        process.stdout.write("   ");
    }
    for(let col =1; n%2 == 0 ? col<=rmirr : col<=rmirr-1; col++){
        process.stdout.write("*  ");
    }
    process.stdout.write("\n");
}
