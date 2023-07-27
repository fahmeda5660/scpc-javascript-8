function mostFrequentElement(arr) {
    const frequencyMap = {};
    let mostFrequentNum;
    let maxFrequency = 0;

    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    for (const num in frequencyMap) {
        if (frequencyMap[num] > maxFrequency) {
            mostFrequentNum = num;
            maxFrequency = frequencyMap[num];
        }
    }

    return mostFrequentNum;
}

const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = mostFrequentElement(inputArray);
console.log(result);
