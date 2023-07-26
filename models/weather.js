// models/weather.js
const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  location: { type: String, required: true },
  temperature: { type: Number, required: true },
  humidity: { type: Number, required: true },
  // Add other fields as needed
  // ...
});

const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;
