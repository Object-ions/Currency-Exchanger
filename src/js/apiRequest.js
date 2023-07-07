export default class apiRequest {
  static getRate(firstCurrencyVal) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${firstCurrencyVal}`)
      .then(function (response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          document.getElementById('main-head').innerText = `Error: ${errorMessage}`
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch((error) => {
        return error;
      });
  }
}