function fetchWeather() {
    const apiKey = '1637ab67d7f7a6a4bc5cdaddf0863cfb';
    const city = 'poitiers';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        

        let mainTemp = Math.round(data.main.temp)
        let feelLike = Math.round(data.main.feels_like);
        console.log(data.wind)

        document.querySelector('#city').innerText = `${data.name}`
        document.querySelector('#temperature').innerText = `Température ${mainTemp}°`
        document.querySelector('#feels-like').innerText = `Ressenti ${feelLike}°`
        document.querySelector('#condition').innerText = `${data.weather[0].description}`
        
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error.message);
      });
  }

  const intervalId = setInterval(fetchWeather, 60 * 60 * 1000);
  
  
  fetchWeather();
  