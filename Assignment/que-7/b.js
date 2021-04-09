for(let row = 1; row <= 5; row++){
    for(let col = 1; col <=row; col++){
        process.stdout.write(col + "  ");
    }
    process.stdout.write("\n");
}