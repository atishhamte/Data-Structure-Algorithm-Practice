// With Recursion
function fibonacci(num) {
    if (num < 2) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

const nTerms = 8;
let arr = [];
for (let i = 0; i < nTerms; i++) {
    arr.push(fibonacci(i));
}
console.log(arr);


// With Iterative
// function fibonacci(num) {
//     let n = [0, 1];
//     for (let i = 2; i < num; i++) {
//         n.push(n[i - 1] + n[i - 2]);
//     }
//     return n;
// }
// let n = 8;
// console.log(fibonacci(n));