let result = '';

function mutil() {
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j <= i; j++) {
            result += i + '*' + j + '=' + (i * j) + '  ';
        }
        result += '\n';
    }
}

mutil();

console.log(result);