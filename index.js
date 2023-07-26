// app.js (or index.js)
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const Weather = require('./models/weather');
const weatherController = require('./controllers/weatherController')

const app = express();
const PORT = 3000;

// MongoDB connection
const MONGODB_URI = 'mongodb://localhost:27017/weather_app';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Fetch weather data from a third-party API and store it in the database
async function fetchAndStoreWeatherData(location) {
  try {
    const apiKey = '943e6eec44bba126f2c3f13ef1757e79'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    const response = await axios.get(apiUrl);
    const { main } = response.data;

    const weatherData = new Weather({
      location: location,
      temperature: main.temp,
      humidity: main.humidity,
      // Add other fields as needed
      // ...
    });

    await weatherData.save();
    console.log('Weather data stored in the database:', weatherData);
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
  }
}

// API endpoint to fetch and store weather data
app.get('/api/weather/save/:location', async (req, res) => {
  const { location } = req.params;
  const weatherData = await fetchAndStoreWeatherData(location);
  res.json(weatherData);
});

app.use(express.json());

// CRUD API endpoints
app.post('/api/weather', weatherController.createWeather);
app.get('/api/weather/:location', weatherController.getWeatherByLocation);
app.get('/api/weather', weatherController.getAllWeather);
app.put('/api/weather/:location', weatherController.updateWeather);
app.delete('/api/weather/:location', weatherController.deleteWeather);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
