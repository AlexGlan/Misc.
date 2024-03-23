const inputForm = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

const checkPhoneNumber = (phone) => {
    if (!phone) {
        alert('Please provide a phone number');
        return;
    }

    const phoneFormat = /^1?([-(\s]+)?\d{3}([-)\s]+)?\d{3}(?:[-\s]+)?\d{4}$/i;
    const matchResult = phone.match(phoneFormat);
    let validParentheses = true;

    const hasOpenParentheses = matchResult && matchResult[1] && matchResult[1].includes('(');
    const hasClosedParentheses = matchResult && matchResult[2] && matchResult[2].includes(')');
    
    if (hasOpenParentheses) {
        validParentheses = hasClosedParentheses;
    } else if (hasClosedParentheses) {
        validParentheses = hasOpenParentheses;
    }
   
    if (matchResult && validParentheses) {
        resultsDiv.innerHTML += `<p class="phone__result__text valid">Valid US number:<br>${phone}</p>`;
        inputForm.value = '';         
    } else {
        resultsDiv.innerHTML += `<p class="phone__result__text invalid">Invalid US number:<br>${phone}</p>`;
        inputForm.value = '';
    }
}

checkBtn.addEventListener( 'click', () => { checkPhoneNumber(inputForm.value); } );

clearBtn.addEventListener( 'click', () => { resultsDiv.innerHTML = ''; } );

inputForm.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkPhoneNumber(inputForm.value);
    }
});