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

    //Get data from local storage
    let checkData = JSON.parse(localStorage.getItem('dataConvertionRate'));

    //If exist
    if (checkData) {
        let firstRate = checkData[firstCurrencyVal];
        let secondRate = checkData[secondCurrencyVal];

        let convertedAmount = (firstAmountVal / firstRate) * secondRate;
        secondAmountEl.value = convertedAmount.toFixed(2);

        document.getElementById('display-p').innerText = `1 ${firstCurrencyVal} = ${secondRate} ${secondCurrencyVal}`;

        //If not exist make API call
    } else {
        //insert values to API
        apiRequest.getRate(firstCurrencyVal)
            .then(function (data) {
                if (data instanceof Error) {
                    console.error(data);
                    return;
                }
                let dataConvertionRate = data.conversion_rates;
                //Store data as a string in local storage
                localStorage.setItem('dataConvertionRate', JSON.stringify(dataConvertionRate));
                let firstRate = dataConvertionRate[firstCurrencyVal];
                let secondRate = dataConvertionRate[secondCurrencyVal];

                let convertedAmount = (firstAmountVal / firstRate) * secondRate;
                secondAmountEl.value = convertedAmount.toFixed(2);

                document.getElementById('display-p').innerText = `1 ${firstCurrencyVal} = ${secondRate} ${secondCurrencyVal}`;
            })
    }
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