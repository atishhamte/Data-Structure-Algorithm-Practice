function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j > -1; j--) {
            if (arr[j + 1] < arr[j]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(insertionSort([2, 5, -1, 0, 12, 44, 11, 65, 33, 87, 96, 57]));