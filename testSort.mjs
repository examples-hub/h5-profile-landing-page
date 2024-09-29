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

function compareSorts() {
    const sizes = [100, 1000, 2000];
    sizes.forEach(size => {
        const randomArray = generateRandomArray(size);

        console.time("Quick Sort");
        quickSort([...randomArray]);
        console.timeEnd("Quick Sort");

        console.time("Merge Sort");
        mergeSort([...randomArray]);
        console.timeEnd("Merge Sort");

        console.time("Heap Sort");
        heapSort([...randomArray]);
        console.timeEnd("Heap Sort");
    });
}

compareSorts();