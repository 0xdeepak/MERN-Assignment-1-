function printEven(){
    var num = 2;
    var jump=0;
    
    while(num <= 500){
        process.stdout.write(num + " ");
        jump += 2;
        num += jump*2;
    }
}

printEven();