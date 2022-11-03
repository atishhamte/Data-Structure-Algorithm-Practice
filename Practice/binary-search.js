// With Iterative
function binarySearch(searchArray, item) {
    let start = 0;
    let end = searchArray.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (searchArray[mid] === item) {
            return mid;
        }

        if (item < searchArray[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
}

// With Recursion
// function binarySearch(searchArray, item, start = 0, end = searchArray.length - 1) {
//     const mid = Math.floor((start + end) / 2);

//     if (item === searchArray[mid]) {
//         return mid;
//     }

//     if (start >= end) {
//         return -1;
//     }

//     return item < searchArray[mid] ?
//         binarySearch(searchArray, item, start, mid - 1) :
//         binarySearch(searchArray, item, mid + 1, end);
// }


let item = 12;
let searchArray = [0, 1, 2, 5, 11, 12, 33, 44, 57, 65, 87, 96];

console.log(binarySearch(searchArray, item));