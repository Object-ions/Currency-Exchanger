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
            // console.log(data);
            let firstRate = data.conversion_rates[firstCurrencyVal];
            let secondRate = data.conversion_rates[secondCurrencyVal];
            console.log(firstCurrencyVal + ' ' + firstRate);
            console.log(secondCurrencyVal + ' ' + secondRate);

            manipDOM(data, firstCurrencyVal, firstRate, secondCurrencyVal, secondRate);
        })
}

//Get elements
let firstAmountEl = document.querySelector('#first-amount');
let firstCurrencyEl = document.querySelector('#first-currency');

let secondAmountEl = document.querySelector('#second-amount');
let secondCurrencyEl = document.querySelector('#second-currency');

function calculate() {
    let firstCurrencyVal = firstCurrencyEl.value;
    let firstAmountVal = firstAmountEl.value;

    let secondCurrencyVal = secondCurrencyEl.value;
    let secondAmountVal = secondAmountEl.value;

    //show 'display' div with results
    document.getElementById('display').classList.remove('hidden');

    getRate(firstCurrencyVal, secondCurrencyVal);
}


// function manipDOM(data, firstCurrencyVal, firstRate, secondCurrencyVal, secondRate) {
//     //Change date
//     document.getElementById('date').innerText = data.time_last_update_utc;
//     //Change first currency and amount
//     document.getElementById('first-amount-display').innerText = firstRate;
//     document.getElementById('first-currency-display').innerText = firstCurrencyVal;
//     //Change second currency and amount
//     document.getElementById('second-amount-display').innerText = secondRate;
//     document.getElementById('second-currency-display').innerText = secondCurrencyVal;
// }

// //Event listener
// firstCurrencyEl.addEventListener('change', calculate);
// firstAmountEl.addEventListener('input', calculate);
// secondCurrencyEl.addEventListener('change', calculate);
// secondAmountEl.addEventListener('input', calculate);


calculate();