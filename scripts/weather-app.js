// bring in all the elements we want to make dynamic and store them in variables
const  inputElment = document.querySelector('.js-input-box');
const searchButton = document.querySelector('#js-search-button');
const weatherImage = document.querySelector('.js-weather-img');
const temperature = document.querySelector('.js-temperature');
const description = document.querySelector('.js-description');
const humidity = document.querySelector('.js-humidity');
const windSpeed = document.querySelector('.js-wind-speed');
const weatherBody = document.querySelector('.js-weather-body')


// add an event listener to the search button so that when click it fetches the text/value that was given in the input element
searchButton.addEventListener('click', () => {
  getWeather(inputElment.value);
})

// added another event listener to listen for when the ENTER key is pressed while typing in the input element
inputElment.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    getWeather(inputElment.value);
  }
})

// ceate a asynchrones function to perfoem the fetching task
async function getWeather(city) {
  // when the function is called, the weather body becomes visible
weatherBody.style.display = 'flex';

// use the fetch function to fetch the weathe information from the API using the api key
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b41e934625c5227826f9cebe9ecfb364&units=metric`);

  if(response.status === 404) {
    // display an error message and image if the api cant fetch/provide information on the input given
    weatherImage.src = './assets/weather-app/404.png';
    temperature.innerHTML = '404';
    description.innerHTML = 'invalid name';
  }

  // covert the fetched info into a json file
  let data = await response.json();

   // dynamicaly provide the images to the image element based on the infomation given by the API
   if (data.weather[0].main === 'Rain') {
    weatherImage.src = './assets/weather-app/rain.png';
  } else if (data.weather[0].main === 'Clear') {
    weatherImage.src = './assets/weather-app/clear.png';
  } else if (data.weather[0].main === 'Clouds') {
    weatherImage.src = './assets/weather-app/cloud.png';
  } else if (data.weather[0].main === 'Mist') {
    weatherImage.src = './assets/weather-app/mist.png';
  } else if (data.weather[0].main === 'Snow') {
    weatherImage.src = './assets/weather-app/snow.png';
  }

  // dinamically provide the values frtched from te api to the elements
  temperature.innerHTML = `${Math.round(data.main.temp)} <sup>°C</sup>`;
  humidity.innerHTML = `${Math.round(data.main.humidity)}%`;
  windSpeed.innerHTML = `${(data.wind.speed).toFixed(1)} Km/H`;
  description.innerHTML = data.weather[0].description;


  // when the function is done running, render the input element empty
  inputElment.value = '';
}