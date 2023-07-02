export default class apiRequest {
  static getRate() {
    fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then((response) => response.jason())
      .then((data) => {
        console.log(data)
      })
  }
}

getRate();



// errorMessage = `${response.status} ${response.statusText}`