function plus(a, b){
    return a + b;
}

function minus(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}

function div(a, b){
    if (b != 0){
        return a / b;
    } else {
        alert('Деление на ноль!');
    }

}

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case 'plus':
            return plus(arg1, arg2);
        case 'minus':
            return minus(arg1, arg2);
        case 'mul':
            return mul(arg1, arg2);
        case 'div':
            return div(arg1, arg2);
    }
}
var a = 10, b = 5;

alert(mathOperation(a, b, 'plus'));
alert(mathOperation(a, b, 'minus'));
alert(mathOperation(a, b, 'mul'));
alert(mathOperation(a, b, 'div'));