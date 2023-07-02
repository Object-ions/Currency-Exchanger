import '../css/styles.css';

function getRate() {
    fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
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
        })
}

getRate();


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
}


//Event listener
firstCurrencyEl.addEventListener('change', calculate);
firstAmountEl.addEventListener('change', calculate);
secondCurrencyEl.addEventListener('change', calculate);
secondAmountEl.addEventListener('change', calculate);


calculate();