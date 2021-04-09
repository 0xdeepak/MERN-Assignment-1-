
for(var row = 1; row <= 5; row++){
    
    for(let col=1; col <= 5-row; col++){
        process.stdout.write("   ");
    }
    for(let col =0; col <row; col++){
        process.stdout.write((row+col) + "  ");
    }
    for(let col =row-1; col >=1; col--){
        process.stdout.write((row+col-1) + "  ");
    }
    for(let col=1; col <= 5-row; col++){
        process.stdout.write("   ");
    }
    process.stdout.write("\n");
}