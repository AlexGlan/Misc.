const formElement = document.getElementById('form');
const inputElement = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('output');

const ROMAN_NUMERALS = {
    M:  1000,
    CM: 900,
    D:  500,
    CD: 400,
    C:  100,
    XC: 90,
    L:  50,
    XL: 40,
    X:  10,
    IX: 9,
    V:  5,
    IV: 4,
    I:  1
};

/**
 * Validates user input to meet the following criteria:
 * 1) input number is an integer
 * 2) 0 < n <= 3999 
 * @param {number} input - User input to be validated
 * @returns {boolean} Whether the user input is valid (true) or not (false)
 */
const validateInput = (input) => {
    let isValidInput = false;
    if (input === '') {
        result.textContent = 'Please enter a valid number.';
    } else if (input <= 0) {
        result.textContent = 'Please enter a number greater than or equal to 1.';
    } else if (input % 1 !== 0) {
        result.textContent = 'Please enter a valid number.';
    } else if (input > 3999) {
        result.textContent = 'Please enter a number less than or equal to 3999.';
    } else {
        isValidInput = true;
        return isValidInput;
    }
}

/**
 * Converts a decimal number to a Roman numeral representation
 * @param {number} decimalNumber - Number to convert to Roman numeral
 * @returns {void} Updates DOM with the result
 */
const convertDecimalToRoman = (decimalNumber) => {
    const isValidInput = validateInput(decimalNumber);
    if (!isValidInput) {
        result.classList.remove('hidden');
        result.classList.add('alert'); 
        return;
    }

    let romanNumeralStr = '';

    for (let romanNumeral in ROMAN_NUMERALS) {
        while (decimalNumber >= ROMAN_NUMERALS[romanNumeral]) {
            romanNumeralStr += romanNumeral;
            decimalNumber -= ROMAN_NUMERALS[romanNumeral];
        }
    }
    
    result.classList.remove('hidden', 'alert');
    result.textContent = romanNumeralStr; 
}

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    convertDecimalToRoman(parseFloat(inputElement.value));
});

convertBtn.addEventListener('click', () => {
    convertDecimalToRoman(parseFloat(inputElement.value));
});