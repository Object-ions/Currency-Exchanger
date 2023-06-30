import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import ApiRequest from './ApiRequest.js'

// UI Logic

function printError(request, apiResponse, city) {
    document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}:  ${request.status} ${request.statusText}: ${apiResponse.message}`;
}

function printElements(apiResponse) {
    // let img1 = document.querySelector('#img1');
    // let img2 = document.querySelector('#img2');
    // let img3 = document.querySelector('#img3');
    // let img4 = document.querySelector('#img4');

    let arrayImg = [];

    for (let index = 1; index < 5; index++) {
        let img = document.querySelector(`#img${index}`);
        arrayImg.push(img);
    }

    arrayImg.forEach(function (img) {
        let i = Math.floor(Math.random() * (50 - 0 + 1) + 0);
        let url = apiResponse.data[i].images.downsized.url;
        img.src = url;
    });
}

function handleFormSubmission(event) {

    const searchInput = document.querySelector('#search').value;
    document.querySelector('#search').value = null;
    event.preventDefault();
    getWeather(searchInput);
}

window.addEventListener("load", function () {
    document.querySelector('form').addEventListener("submit", handleFormSubmission);
});