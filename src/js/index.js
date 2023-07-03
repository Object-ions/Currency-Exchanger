import '../css/styles.css'

function getRate(firstCurrencyVal, secondCurrencyVal, firstAmountVal) {
    fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${firstCurrencyVal}`)
        .then((response) => {
            if (!response.ok) {
                const errorMessage = `${response.status} ${response.statusText}`;
                document.getElementById('main-head').innerText = errorMessage;
                document.getElementById('main-p').innerText = 'ERROR';
            } else {
                return response.json();
            }
        })
        .then((data) => {
            let firstRate = data.conversion_rates[firstCurrencyVal];
            let secondRate = data.conversion_rates[secondCurrencyVal];

            let convertedAmount = (firstAmountVal / firstRate) * secondRate;
            secondAmountEl.value = convertedAmount.toFixed(2);

            document.getElementById('display-p').innerText = `1 ${firstCurrencyVal} = ${secondRate} ${secondCurrencyVal}`

            manipDOM(data, firstCurrencyVal, firstRate, secondCurrencyVal, secondRate, firstAmountVal, convertedAmount);
        })
}

//Get DOM elements
let swipe = document.getElementById('swipe');

let firstAmountEl = document.querySelector('#first-amount');
let firstCurrencyEl = document.querySelector('#first-currency');

let secondAmountEl = document.querySelector('#second-amount');
let secondCurrencyEl = document.querySelector('#second-currency');

function calculate() {
    //Get the value of the currnecy code
    let firstCurrencyVal = firstCurrencyEl.value;
    let secondCurrencyVal = secondCurrencyEl.value;

    //Get the value of the amount
    let firstAmountVal = firstAmountEl.value;

    //insert values to API
    getRate(firstCurrencyVal, secondCurrencyVal, firstAmountVal);
}

//Manipulate the DOM
function manipDOM(data, firstCurrencyVal, secondCurrencyVal, firstAmountVal, convertedAmount) {
    document.getElementById('date').innerText = data.time_last_update_utc;

    document.getElementById('first-amount-display').innerText = firstAmountVal;
    document.getElementById('first-currency-display').innerText = firstCurrencyVal;

    document.getElementById('second-amount-display').innerText = convertedAmount.toFixed(2);
    document.getElementById('second-currency-display').innerText = secondCurrencyVal;
}

//Event listeners (update calc)
firstCurrencyEl.addEventListener('change', calculate);
firstAmountEl.addEventListener('input', calculate);
secondCurrencyEl.addEventListener('change', calculate);
secondAmountEl.addEventListener('input', calculate);

swipe.addEventListener('click', () => {
    let temp = firstCurrencyEl.value;
    firstCurrencyEl.value = secondCurrencyEl.value;
    secondCurrencyEl.value = temp;
    calculate();
});

//Ran the function initially
calculate();