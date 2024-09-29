function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Test cases
function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
}

function testQuickSort() {
    const testArray1 = generateRandomArray(10);
    const sortedArray1 = quickSort(testArray1);
    console.log("Test Array 1: ", testArray1);
    console.log("Sorted Array 1: ", sortedArray1);
    console.assert(JSON.stringify(sortedArray1) === JSON.stringify(testArray1.sort((a, b) => a - b)), "Test Case 1 Failed");

    const testArray2 = generateRandomArray(15);
    const sortedArray2 = quickSort(testArray2);
    console.log("Test Array 2: ", testArray2);
    console.log("Sorted Array 2: ", sortedArray2);
    console.assert(JSON.stringify(sortedArray2) === JSON.stringify(testArray2.sort((a, b) => a - b)), "Test Case 2 Failed");
}

testQuickSort();