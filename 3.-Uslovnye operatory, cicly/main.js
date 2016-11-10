//3.FIZZBUZZ (1 часть) (МОЁ ДЗ)

var x, str = '';
for (x = 1; x <= 100; x++) {
    if (x % 3 == 0) {
        console.log('Fizz');
    } else {
        if (x % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(x);
        }
    }
}

//3.FIZZBUZZ (2 часть) (МОЁ ДЗ)

var x, str = '';
for (x = 1; x <= 100; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log('FizzBuzz');
    } else {
        if (x % 3 == 0) {
            console.log('Fizz');
        } else {
            if (x % 5 == 0) {
                console.log('Buzz');
            } else {
                console.log(x);
            }
        }
    }
}

//3.ТРЕУГОЛЬНИК (1 cпособ - как надо) (МОЁ ДЗ)

var i, j, s = '';
for (i = 0; i < 8; i++) {
    for (j = 0; j < i; j++) {
        s = s + '#';
    }
    s = s + '\n';
}
console.log(s);

//3.ТРЕУГОЛЬНИК (2 способ) (МОЁ ДЗ)

var a, st = '';
for (a = 1; a <= 8; a++) {
    console.log(st = st + '#');
}