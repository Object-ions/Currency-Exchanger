export default class apiRequest {
  static getRate() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function (response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          console.log(errorMessage)
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