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

var a = 10, b = 5;

alert(plus(a, b));
alert(minus(a, b));
alert(mul(a, b));
alert(div(a, b));