const inputForm = document.getElementById('text-input');
const submitButton = document.getElementById('check-btn');
const resultText = document.querySelector('.palindtome-card__result-text');

/**
 * Removes all non-alphanumeric characters from an user input string
 * @param {string} input - String to process
 * @returns {string} A new string with only alphanumeric characters
 */
function cleanInput(input) {
    const regex = /[^a-z0-9]/gi;
    return input.replace(regex, '');
}

/**
 * Checks if user entered text is a valid palindrome and renders result message
 * @returns {void}
 */
function checkValidPalindrome() {
    const userInput = inputForm.value;

    if (userInput.length === 0) {
        if (resultText.innerHTML.length > 0) {
            resultText.innerHTML = ``;
        }
        alert('Please input a value');
        return;
    }

    const text = cleanInput(userInput);
    const reversedText = text.split('').reverse().join('');
    const isValidPalindrome = text.toLowerCase() === reversedText.toLowerCase();
    
    if (isValidPalindrome) {
        resultText.innerHTML = `<strong>${userInput}</strong> is a palindrome.`;
    } else {
        resultText.innerHTML = `<strong>${userInput}</strong> is not a palindrome.`;
    }
    inputForm.value = '';
}

submitButton.addEventListener('click', checkValidPalindrome);

inputForm.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkValidPalindrome();
    }
});