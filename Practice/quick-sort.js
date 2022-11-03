function partition(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIdx++;
            let temp = arr[i];
            arr[i] = arr[swapIdx];
            arr[swapIdx] = temp;
        }
    }

    let temp = arr[start];
    arr[start] = arr[swapIdx];
    arr[swapIdx] = temp;

    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([2, 5, -1, 0, 12, 44, 11, 65, 33, 87, 96, 57]));