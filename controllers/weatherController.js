// controllers/weatherController.js
const Weather = require('../models/weather');

async function createWeather(req, res) {
  try {
    const { location, temperature, humidity } = req.body;
    const weatherData = new Weather({
      location,
      temperature,
      humidity,
      // Add other fields as needed
      // ...
    });

    await weatherData.save();
    res.status(201).json(weatherData);
  } catch (error) {
    console.error('Error creating weather data:', error.message);
    res.status(500).json({ error: 'Error creating weather data' });
  }
}

async function getWeatherByLocation(req, res) {
  const { location } = req.params;

  try {
    const weatherData = await Weather.findOne({ location });
    if (!weatherData) {
      return res.status(404).json({ error: 'Weather data not found' });
    }

    res.json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    res.status(500).json({ error: 'Error fetching weather data' });
  }
}

async function getAllWeather(req, res) {
  try {
    const allWeatherData = await Weather.find();
    res.json(allWeatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    res.status(500).json({ error: 'Error fetching weather data' });
  }
}

async function updateWeather(req, res) {
  const { location } = req.params;

  try {
    const updatedData = req.body;
    const weatherData = await Weather.findOneAndUpdate({ location }, updatedData, {
      new: true,
    });

    if (!weatherData) {
      return res.status(404).json({ error: 'Weather data not found' });
    }

    res.json(weatherData);
  } catch (error) {
    console.error('Error updating weather data:', error.message);
    res.status(500).json({ error: 'Error updating weather data' });
  }
}

async function deleteWeather(req, res) {
  const { location } = req.params;

  try {
    const deletedData = await Weather.findOneAndDelete({ location });
    if (!deletedData) {
      return res.status(404).json({ error: 'Weather data not found' });
    }

    res.json({ message: 'Weather data deleted successfully' });
  } catch (error) {
    console.error('Error deleting weather data:', error.message);
    res.status(500).json({ error: 'Error deleting weather data' });
  }
}

module.exports = {
  createWeather,
  getWeatherByLocation,
  getAllWeather,
  updateWeather,
  deleteWeather,
};
