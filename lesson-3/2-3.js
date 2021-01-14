var basket = [];

function countBasketPrice (arr) {
    let summ = 0;
    for (let i in arr) {
        summ += arr[i];
    }
    return summ;
}

function addPrice () {
    let k = true;
    while (k) {
        let price = prompt('Введите стоимость товара: ');
        if (price == 'q') {
            k = false;
        } else {
            basket.push(+price);
        }
    }
}

addPrice();
alert(countBasketPrice(basket));