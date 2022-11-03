function selectionSort(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;

        }
    }

    return arr;
}

console.log(selectionSort([2, 5, -1, 0, 12, 44, 11, 65, 33, 87, 96, 57]));