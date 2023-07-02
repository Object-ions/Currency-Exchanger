import '../css/styles.css';

function getRate(firstCurrencyVal) {
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
            console.log(data.conversion_rates);
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

    console.log('currency1: ' + firstCurrencyVal);
    console.log('currency2: ' + secondCurrencyVal);

    getRate(firstCurrencyVal);
}


//Event listener
firstCurrencyEl.addEventListener('change', calculate);
firstAmountEl.addEventListener('input', calculate);
secondCurrencyEl.addEventListener('change', calculate);
secondAmountEl.addEventListener('input', calculate);


calculate();