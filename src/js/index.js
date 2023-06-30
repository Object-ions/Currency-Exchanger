import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import apiRequest from './apiRequest.js';

dataHandeler() => {
    apiRequest.getRate()
        .then(function (response) {
            if (response.conversion_rates) {
                printResult(response, firstCurrency, secondCurrency)
            } else {
                printError(response)
            }
        })
}