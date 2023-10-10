setInterval(function () {
  let losangelesElement = document.querySelector("#los-angeles");
  if (losangelesElement) {
    let losangelesDateElement = losangelesElement.querySelector(".date");
    let losangelesTimeElement = losangelesElement.querySelector(".time");
    losangelesDateElement.innerHTML = moment().format("MMMM Mo YYYY");
    losangelesTimeElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}, 1000);

//paris
setInterval(function () {
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    parisDateElement.innerHTML = moment().format("MMMM Mo YYYY");
    parisTimeElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="cities">
          <div>
            <h2>${cityName}</h2>
            <h3 class="date" id="current-date">${cityTime.format(
              "MMMM Mo YYYY"
            )}</h3>
          </div>
          <div>
            <div class="time" id="current-time">${cityTime.format(
              "h:mm:ss"
            )}<small> ${cityTime.format("A")}</small></div>
          </div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
