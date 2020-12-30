let i = 2;
while (i <= 100) {
    let j = 2;
    let k = 0;
    while (j < i) {
        if (i % j == 0) {
            k++;
            break;
        } else {
            j++;
        }
    }
    if (k == 0) {
        console.log(i);
    }
    i++;
}