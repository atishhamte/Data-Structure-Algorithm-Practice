function isPrimeNumber(num) {
    if (num <= 1) {
        return false;
    }
    let n = Math.floor(Math.sqrt(num));
    for (let i = n; i > 1; i--) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

let num = 4;

console.log(num + ' is prime number : ' + (isPrimeNumber(num) ? 'Yes' : 'No'));