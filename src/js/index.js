import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import apiRequest from './apiRequest.js';

//Get elements


//Defualt static vars
let amount = 0;
let firstCurrency = 'USD';
let secondCurrency = 'EUR';

const dataHandeler = () => {
    apiRequest.getRate(amount, firstCurrency, secondCurrency)
        .then(function (response) {
            if (response.conversion_rates) {
                printResult(response, firstCurrency, secondCurrency)
            } else {
                printError(response)
            }
        })
}

printResult(response, firstCurrency, secondCurrency) => {

}

printError(error) => {

}