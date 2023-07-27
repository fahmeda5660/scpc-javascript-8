function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Error: Cannot divide by zero!';
            }
        default:
            return 'Error: Invalid operator!';
    }
}

const number1 = 10;
const number2 = 5;
const operator = '/';
const result = calculator(number1, operator, number2);
console.log(result); 
