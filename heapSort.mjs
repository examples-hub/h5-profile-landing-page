function heapSort(arr) {
    const heapify = (arr, n, i) => {
        let largest = i; 
        const left = 2 * i + 1; 
        const right = 2 * i + 2; 

        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(arr, n, largest);
        }
    };

    const n = arr.length;

    for (let i = Math.floor(n / 2); i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

// Test cases
function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
}

function testHeapSort() {
    const testArray1 = generateRandomArray(10);
    const sortedArray1 = heapSort([...testArray1]);
    console.log("Test Array 1: ", testArray1);
    console.log("Sorted Array 1: ", sortedArray1);
    console.assert(JSON.stringify(sortedArray1) === JSON.stringify(testArray1.sort((a, b) => a - b)), "Test Case 1 Failed");

    const testArray2 = generateRandomArray(15);
    const sortedArray2 = heapSort([...testArray2]);
    console.log("Test Array 2: ", testArray2);
    console.log("Sorted Array 2: ", sortedArray2);
    console.assert(JSON.stringify(sortedArray2) === JSON.stringify(testArray2.sort((a, b) => a - b)), "Test Case 2 Failed");
}

testHeapSort();