function reverseString(string) {
    const arrayString = string.split("");
    const reverseArray = arrayString.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
}

const string = "fahmeda";
const result = reverseString(string);
console.log("Result is: ", result);