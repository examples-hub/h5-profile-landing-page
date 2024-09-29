function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    let result = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Test cases
function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
}

function testMergeSort() {
    const testArray1 = generateRandomArray(10);
    const sortedArray1 = mergeSort(testArray1);
    console.log("Test Array 1: ", testArray1);
    console.log("Sorted Array 1: ", sortedArray1);
    console.assert(JSON.stringify(sortedArray1) === JSON.stringify(testArray1.sort((a, b) => a - b)), "Test Case 1 Failed");

    const testArray2 = generateRandomArray(15);
    const sortedArray2 = mergeSort(testArray2);
    console.log("Test Array 2: ", testArray2);
    console.log("Sorted Array 2: ", sortedArray2);
    console.assert(JSON.stringify(sortedArray2) === JSON.stringify(testArray2.sort((a, b) => a - b)), "Test Case 2 Failed");
}

testMergeSort();