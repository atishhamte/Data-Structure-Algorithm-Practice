function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) {
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([2, 5, -1, 0, 12, 44, 11, 65, 33, 87, 96, 57]));