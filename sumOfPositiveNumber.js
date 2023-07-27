function sumOfPositiveNumbers(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }
    }
    return sum;
}
const array = [2, -5, 10, -3, 7,1];
const result = sumOfPositiveNumbers(array);
console.log(result);