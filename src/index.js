let now = new Date();
let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurthday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
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
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let month = months[now.getMonth()];
function formatDate() {
  return `${day}, ${month} ${date}, ${hours}:${minutes}`;
}
let newDate = formatDate();
let h2 = document.querySelector("h2");
h2.innerHTML = newDate;
let h1 = document.querySelector("h1");
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#temp");
  temp.innerHTML = `${temperature}℃`;
  h1.innerHTML = response.data.name;
}
function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#name-city");
  let apiKey = "58a6775f97527351bf6c6966e209be39";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  //h1.innerHTML = input.value;
}
let input = document.querySelector("#name-city-form");
input.addEventListener("submit", searchCity);
//let tempEl = document.querySelector("#temp");

function showPosition(position) {
  console.log(position);
  let apiKey = "58a6775f97527351bf6c6966e209be39";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);

  //h1.innerHTML = response.data.name;
}
function navigate(response) {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let current = document.querySelector("#current");
current.addEventListener("click", navigate);

/*function showPosition(position) {
  let apiKey = "58a6775f97527351bf6c6966e209be39";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}*/
//I have to add a real city showed by  default
