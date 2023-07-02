import '../css/styles.css'

function getRate(firstCurrencyVal, secondCurrencyVal, firstAmountVal) {
    fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${firstCurrencyVal}`)
        .then((response) => {
            if (!response.ok) {
                const errorMessage = `${response.status} ${response.statusText}`;
                console.log(errorMessage);
            } else {
                return response.json();
            }
        })
        .then((data) => {
            let firstRate = data.conversion_rates[firstCurrencyVal];
            let secondRate = data.conversion_rates[secondCurrencyVal];

            let convertedAmount = (firstAmountVal / firstRate) * secondRate;
            secondAmountEl.value = convertedAmount.toFixed(2);

            manipDOM(data, firstCurrencyVal, firstRate, secondCurrencyVal, secondRate, firstAmountVal, convertedAmount);
        })
}

let firstAmountEl = document.querySelector('#first-amount');
let firstCurrencyEl = document.querySelector('#first-currency');

let secondAmountEl = document.querySelector('#second-amount');
let secondCurrencyEl = document.querySelector('#second-currency');

function calculate() {
    let firstCurrencyVal = firstCurrencyEl.value;
    let firstAmountVal = firstAmountEl.value;

    let secondCurrencyVal = secondCurrencyEl.value;

    document.getElementById('display').classList.remove('hidden');

    getRate(firstCurrencyVal, secondCurrencyVal, firstAmountVal);
}

function manipDOM(data, firstCurrencyVal, firstRate, secondCurrencyVal, secondRate, firstAmountVal, convertedAmount) {
    document.getElementById('date').innerText = data.time_last_update_utc;

    document.getElementById('first-amount-display').innerText = firstAmountVal;
    document.getElementById('first-currency-display').innerText = firstCurrencyVal;

    document.getElementById('second-amount-display').innerText = convertedAmount.toFixed(2);
    document.getElementById('second-currency-display').innerText = secondCurrencyVal;
}

firstCurrencyEl.addEventListener('change', calculate);
firstAmountEl.addEventListener('input', calculate);
secondCurrencyEl.addEventListener('change', calculate);

calculate();