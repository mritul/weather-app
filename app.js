const api = {
  key: "cc301dc3a567ce61dc6460735f1e4d49",
};

const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".searchBtn");
const city = document.querySelector(".location");
const date = document.querySelector(".date");
const temperature = document.querySelector(".temperature");
const condition = document.querySelector(".condition");
const hi_lo = document.querySelector(".hi-lo");

//Date retrieval
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let x = new Date();
let num = x.getDate();
let month = months[x.getMonth()];
let day = days[x.getDay()];

console.log(num);
console.log(month);
console.log(day);

function getResults() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchBox.value}&appid=${api.key}&units=metric` //Use q=Location instead of latitude and longitude
  ) //DO NOT forget https:/ which if not added throws 404 error
    .then((response) => response.json())
    .then((data) => {
      //data is the JSON object
      console.log(data.name);
      condition.innerHTML = data.weather[0].main; //See the data object for guiding through the info
      city.innerHTML = data.name;
      temperature.innerHTML = Math.round(data.main.temp) + "°C";
      hi_lo.innerHTML =
        Math.round(data.main.temp_min) +
        "°C" +
        " / " +
        Math.round(data.main.temp_max) +
        "°C";
      date.innerHTML = `${day}, ${num} ${month}`;
    })

    .catch((err) => alert("Invalid City!"));
}
searchBtn.addEventListener("click", getResults);
