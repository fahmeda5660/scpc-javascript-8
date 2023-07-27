function findSecondSmallest(array) {
    if (array.length < 2) {
        return "Error: Array must contain at least two numbers.";
    }

    array.sort((a, b) => a - b);

    const uniqueArr = array.filter((value, index) => array.indexOf(value) === index);

    if (uniqueArr.length < 2) {
        return "Error: There is no second smallest element in the array.";
    }

    return uniqueArr[1];
}

const numbers = [5, 2, 8, 10, 9, 3, 7];
const result = findSecondSmallest(numbers);
console.log(result); 
