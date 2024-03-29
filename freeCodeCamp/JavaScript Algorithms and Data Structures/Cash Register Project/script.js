const result = document.getElementById('change-due');
const inputField = document.getElementById('cash');
const priceSpan = document.getElementById('price');
const cashDrawer = document.getElementById('cash-drawer');
const purchaseBtn = document.getElementById('purchase-btn');

let price = 1.87;
let cash;
let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
];
const currencyUnitValues = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01
}

/**
 * Displays current price to the user
 * @param {number} price - Current unit price
 * @returns {void} Updates DOM with the current price
 */
const updatePrice = (price) =>  {
    priceSpan.textContent = `Total: ${price}$`;
}

/**
 * Displays the amount of cash in the drawer per currency unit to the user
 * @param {Array<HTMLSpanElement>} arr - Array of HTML span elements
 * @returns {void} Updates DOM with new values
 */
const updateCashDrawer = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const currencyUnit = arr[i];
        const drawerAmount = cid[i][1];
        currencyUnit.textContent = `${currencyUnit.textContent.split(':')[0]}: $${drawerAmount}`;
    }
}

/**
 * Displays drawer status after transaction:
 * 1) CLOSED - if the amount of cash in drawer is equal to the change due
 * 2) OPEN - if the amount of cash in drawer is greater than the change due
 * @param {number} remainigCashInDrawer - Remaining amount of cash in the drawer
 * @returns {void} Updates DOM with the status
 */
const updateResultStatus = (remainigCashInDrawer) => {
    if (remainigCashInDrawer === 0) {
        result.innerHTML += `<p>Status: CLOSED<p>`;
    } else {
        result.innerHTML += `<p>Status: OPEN<p>`;
    }
}

/**
 * Validates that cash amount is a valid number that is greater than 0
 * @param {number} cash - Cash amount from customer
 * @returns {boolean} True if cash amount is valid, otherwise false
 */
const validateInput = (cash) => {
    if (isNaN(cash) || cash <= 0) {
        alert('Please enter a valid number');
        return false;
    }
    return true;
}

/**
 * Checks whether the customer paid with the exact amount or doesn't have enough cash for purchase
 * @param {number} changeDue - The amount of change to return to the customer
 * @returns {boolean} True if user paid wth the exact amount or doesn't have enough cash, otherwise false
 */
const checkExactOrZeroCash = (changeDue) => {
    if (changeDue === 0) {
        result.innerHTML = `<p>No change due - customer paid with exact cash</p>`;
        return true;
    } else if (changeDue < 0) {
        alert('Customer does not have enough money to purchase the item');
        return true;
    }
    return false; 
}

/**
 * Checks if the amount of cash in drawer is less than the change due
 * @param {number} remainigCashInDrawer - Remaining amount of cash in the drawer
 * @param {number} price - Current unit price
 * @param {number} cash - Cash amount from customer
 * @returns {boolean} True if there's not enough cash in the drawer, otherwise false
 */
const checkInsufficientFunds = (remainigCashInDrawer, price, cash) => {
    if (remainigCashInDrawer + price < cash) {
        result.innerHTML = `<p>Status: INSUFFICIENT_FUNDS<p>`;
        return true;
    }
    return false;
}

/**
 * Calculates the sum of cash in the drawer
 * @returns {number} Remaining total amount of cash in the drawer
 */
const calculateCashInDrawer = () => parseFloat(cid.reduce( (acc, currVal) => acc + currVal[1], 0 ).toFixed(2));

/**
 * Returns change to the customer based on the price of the item,
 * the amount of cash provided by the customer,and the amount of cash in the cash drawer
 * @param {number} cash - Cash amount from customer
 * @returns {void} Updates DOM with the result
 */
const returnChange = (cash) => {
    if (!validateInput(cash)) {
        return;
    }

    result.innerHTML = '';
    const oldDrawerValues = JSON.parse(JSON.stringify(cid));
    let changeDue = cash - price;
    let remainigCashInDrawer = calculateCashInDrawer();

    if (checkExactOrZeroCash(changeDue) || checkInsufficientFunds(remainigCashInDrawer, price, cash)) {
        return;
    }

    for (let i = cid.length - 1; i >= 0; i--) {
        const unitValue = currencyUnitValues[cid[i][0]];
        while (changeDue >= unitValue && cid[i][1] > 0) {
            changeDue = parseFloat((changeDue - unitValue).toFixed(2));
            cash = parseFloat((cash - unitValue).toFixed(2));
            cid[i][1] = parseFloat((cid[i][1] - unitValue).toFixed(2));
        }

        if (oldDrawerValues[i][1] !== cid[i][1]) {
            result.innerHTML += `<p>${cid[i][0]}: $${parseFloat((oldDrawerValues[i][1] - cid[i][1]).toFixed(2))}</p>`;
        }  
    }

    // Check if drawer cannot return the exact change
    if (changeDue !== 0) {
        cid = JSON.parse(JSON.stringify(oldDrawerValues));        
        result.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
        inputField.value = '';
        return;
    }

    updateCashDrawer([...cashDrawer.children]);
    remainigCashInDrawer = calculateCashInDrawer();
    updateResultStatus(remainigCashInDrawer);
    inputField.value = '';    
}

purchaseBtn.addEventListener( 'click', () => { returnChange(parseFloat(inputField.value)); } );

inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        returnChange(parseFloat(inputField.value));
    }
});

window.addEventListener('load', () => {
    updatePrice(price);
    updateCashDrawer([...cashDrawer.children]);
});