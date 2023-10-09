let losangelesElement = document.querySelector("#los-angeles");
let losangelesDateElement = losangelesElement.querySelector(".date");
let losangelesTimeElement = losangelesElement.querySelector(".time");
losangelesDateElement.innerHTML = moment().format("MMMM Mo YYYY");
losangelesTimeElement.innerHTML = moment()
  .tz("America/Los_Angeles")
  .format("h:mm:ss [<small>]A[</small>]");

//paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
parisDateElement.innerHTML = moment().format("MMMM Mo YYYY");
parisTimeElement.innerHTML = moment()
  .tz("Europe/Paris")
  .format("h:mm:ss [<small>]A[</small>]");
