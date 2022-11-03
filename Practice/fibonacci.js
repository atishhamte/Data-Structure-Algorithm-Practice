// With Recursion
// function fibonacci(num) {
//     if (num <= 1) {
//         return 1;
//     }
//     return num * fibonacci(num - 1);
// }

// With Iterative
function fibonacci(num) {
    for (let i = num - 1; i > 1; i--) {
        num *= i
    }
    return num;
}

let n = 5;

console.log(fibonacci(n));