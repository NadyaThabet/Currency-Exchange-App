let myInput = document.querySelector(".my-inp");
let mySelect = document.querySelector(".my-select");
let myBox = document.querySelector(".my-box");
let myDiv = document.querySelector(".my-div");
let myBtn = document.querySelector(".my-btn");

fetch("https://openexchangerates.org/api/currencies.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let country in data) {
      mySelect.innerHTML += `<option><img src="https://flagsapi.com/:country_code/:style/:size.png">${country}</option>`;
      myBox.innerHTML += `<option>${country}</option>`;
    }

    myBtn.addEventListener("click", () => {
      fetch(
        `https://v6.exchangerate-api.com/v6/15beba7021f8570102343153/latest/${mySelect.value}`
      )
        .then((response) => {
          return response.json();
        })
        .then((fetchedData) => {
          let rate = fetchedData.conversion_rates;
          let convResult = myInput.value * rate[myBox.value];
          myDiv.innerHTML = `${myInput.value} ${mySelect.value} = ${convResult} ${myBox.value}`;
        });
    });
  });
