function power(val, pow){
    // let x = 1;
    if (pow == 0){
        return 1;
    } else{
        return val * power(val, pow - 1);
    }
}

alert(power(3, 4));