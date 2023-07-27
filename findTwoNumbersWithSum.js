function findTwoNumbersWithSum(array, target) {
    const numIndexMap = {};

    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i];

        if (complement in numIndexMap) {
            return [numIndexMap[complement], i];
        }

        numIndexMap[array[i]] = i;
    }

    return [];
}

const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 17;
const result = findTwoNumbersWithSum(inputArray, targetValue);
console.log(result); 
