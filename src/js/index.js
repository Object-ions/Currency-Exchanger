import '../css/styles.css';

function getRate(firstCurrencyVal, secondCurrencyVal) {
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
            console.log(data);
            let firstRate = data.conversion_rates[firstCurrencyVal];
            let secondRate = data.conversion_rates[secondCurrencyVal];
            console.log(firstCurrencyVal + ' ' + firstRate);
            console.log(secondCurrencyVal + ' ' + secondRate);

            manipDOM(data);
        })
}

//Get elements
let firstCurrencyEl = document.querySelector('#first-currency');
let firstAmountEl = document.querySelector('#first-amount');

let secondCurrencyEl = document.querySelector('#second-currency');
let secondAmountEl = document.querySelector('#second-amount');

function calculate() {
    let firstCurrencyVal = firstCurrencyEl.value;
    let secondCurrencyVal = secondCurrencyEl.value;

    getRate(firstCurrencyVal, secondCurrencyVal);
}


function manipDOM(data, firstCurrencyVal, firstRate, secondCurrencyVal, secondRate) {
    //Change date
    document.getElementById('date').innerText = data.time_last_update_utc;
    //Change first currency and amount
    document.getElementById('first-amount-display').innerText = firstCurrencyVal;
    document.getElementById('first-currency-display').innerText = firstRate;
    //Change second currency and amount
    document.getElementById('second-amount-display').innerText = secondCurrencyVal;
    document.getElementById('second-currency-display').innerText = secondRate;
}

//Event listener
firstCurrencyEl.addEventListener('change', calculate);
firstAmountEl.addEventListener('input', calculate);
secondCurrencyEl.addEventListener('change', calculate);
secondAmountEl.addEventListener('input', calculate);


calculate();