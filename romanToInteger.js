function romanToInteger(romanNumeral) {
    const romanNumeralsMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentNumeralValue = romanNumeralsMap[romanNumeral[i]];
        const nextNumeralValue = romanNumeralsMap[romanNumeral[i + 1]];

        if (nextNumeralValue > currentNumeralValue) {
            result += nextNumeralValue - currentNumeralValue;
            i++; 
        } else {
            result += currentNumeralValue;
        }
    }

    return result;
}

console.log(romanToInteger("XVII")); 

