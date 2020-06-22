function oddOrEven() {
    let num = 0;
    while (num <= 20) {
        if (num % 2 == 0) {
            console.log(`${num} is even number`);
        } else {
            console.log(`${num} is odd number`);
        }
        num++;
    }
}

oddOrEven();