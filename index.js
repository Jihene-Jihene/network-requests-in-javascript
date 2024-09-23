const apiKey = '67552365b1d210828137a92b0ce33198'; 
const apiUri = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetch(`${apiUri}?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            })
            .then(data => {
                const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                const weatherDetails = `
                    <h2>${data.name}</h2>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
                document.getElementById('weatherIcon').src = weatherIcon;
                document.getElementById('weatherDetails').innerHTML = weatherDetails;
            })
            .catch(error => {
                document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
            });
    } else {
        alert('Please enter a city name');
    }
});
