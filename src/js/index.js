// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/styles.css';
// import apiRequest from './apiRequest.js';

// //Get elements
// const displayDiv = document.querySelector('#display');
// let errorElement = document.querySelector('#error');

// //Defualt static vars
// let amount = 0;
// let firstCurrency = 'USD';
// let secondCurrency = 'EUR';

// function dataHandeler() {
//     apiRequest.getRate()
//         .then(function (response) {
//             if (response.conversion_rates) {
//                 // printResult(response, firstCurrency, secondCurrency);
//                 console.log(response);
//             } else {
//                 // printError(response)
//                 console.log('problem');
//             }
//         })
// }

// function printResult(response, firstCurrency, secondCurrency) {

// }

// function printError(error) {
//     errorElement.innerText = `Error: ${error}`
// }