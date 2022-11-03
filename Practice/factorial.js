// With Recursion
// function factorial(num) {
//     if (num <= 1) {
//         return 1;
//     }
//     return num * factorial(num - 1);
// }

// With Iterative
function factorial(num) {
    for (let i = num - 1; i > 1; i--) {
        num *= i
    }
    return num;
}

let n = 5;

console.log(factorial(n));