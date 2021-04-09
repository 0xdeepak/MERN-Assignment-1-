let readlineSync = require('readline-sync');
var n = readlineSync.question("Enter size of pattern: ");  //works perfect for all numbers

let rmirr; let mid = Math.ceil(n/2);
for(let row = 1; row <= n; row++){
    
    if(row <= mid){
        rmirr = row;
    }
    else{
        rmirr = n-row+1;
    }
    for(let col=1; col <= mid-rmirr+1; col++){
        process.stdout.write("*  ");
    }
    for(let col =1; col <=rmirr-1; col++){
        process.stdout.write("   ");
    }
    for(let col =2; n%2 == 0 ? col<=rmirr : col<=rmirr-1; col++){
        process.stdout.write("   ");
    }
    for(let col=1; n%2 != 0 && rmirr==1 ? col <= mid-rmirr : col <= mid-rmirr+1; col++){
        process.stdout.write("*  ");
    }
    process.stdout.write("\n");
}
