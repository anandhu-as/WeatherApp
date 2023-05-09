const form = document.querySelector("form");
const input = document.querySelector("#city");
const displayWeather = document.querySelector("#weather");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const API_KEY = "3c086575f9e48cbad4854705654dc139";
  const cityName = input.value;
  console.log(cityName);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.main);
      const temperature = data.main.temp;
      console.log(temperature);
      const tempInCelsius = Math.floor(((temperature - 32) * 5) / 9);
      displayWeather.innerHTML = `Temperature in ${cityName} is ${tempInCelsius}°C , Humidity: ${data.main.humidity} % `;
    })
    .catch((err) => {
      displayWeather.innerHTML = "City Not Found.....";
    });
});
