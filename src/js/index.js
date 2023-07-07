import '../css/styles.css'
import apiRequest from './apiRequest.js';


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
    apiRequest.getRate(firstCurrencyVal)
        .then(function (data) {
            let firstRate = data.conversion_rates[firstCurrencyVal];
            let secondRate = data.conversion_rates[secondCurrencyVal];

            let convertedAmount = (firstAmountVal / firstRate) * secondRate;
            secondAmountEl.value = convertedAmount.toFixed(2);

            document.getElementById('display-p').innerText = `1 ${firstCurrencyVal} = ${secondRate} ${secondCurrencyVal}`;

            manipDOM(data);
        })
}

//Manipulate the DOM
function manipDOM(data,) {
    document.getElementById('date').innerText = data.time_last_update_utc;
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