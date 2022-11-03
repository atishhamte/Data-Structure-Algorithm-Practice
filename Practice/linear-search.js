function linearSearch(item, searchArray) {
    for (let i = 0; i < searchArray.length; i++) {
        if (searchArray[i] === item) {
            return true;
        }
    }
    return false;
}

let item = 0;
let searchArray = [2, 5, -1, 0, 12, 44, 11, 65, 33, 87, 96, 57];

console.log(linearSearch(item, searchArray));