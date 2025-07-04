async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "1c4e500f65ceccdeff564afc911c5b41";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
      const weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>🌥️ Weather: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weatherResult").innerHTML = weatherInfo;
    } catch (error) {
      document.getElementById("weatherResult").innerHTML =
        "<p style='color:red;'>Error: " + error.message + "</p>";
    }
  }
  