# Weather App

This is a Node.js weather application that fetches weather data from a third-party API and stores it in a MongoDB database. The application also provides CRUD (Create, Read, Update, Delete) operations for managing weather data.

## Requirements

Before running the application, ensure you have the following installed:

- Node.js
- MongoDB

## Getting Started

1. Clone the repository:

   ```
   git clone <repository_url>
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Set up MongoDB:

   - Make sure MongoDB is installed and running on your system.
   - Update the `MONGODB_URI` variable in `app.js` with your MongoDB connection string.

4. Fetch and Store Weather Data:

   - The application fetches weather data from the OpenWeatherMap API and stores it in the MongoDB database.
   - To fetch weather data for a specific location, send a GET request to the following endpoint:

     ```
     GET /api/weather/save/:location
     ```

     Replace `:location` with the name of the location you want to fetch weather data for.

5. CRUD API Endpoints:

   The application provides the following CRUD API endpoints for managing weather data:

   - Create Weather Data:

     ```
     POST /api/weather
     ```

     Send a JSON object with weather data in the request body.

   - Get Weather Data by Location:

     ```
     GET /api/weather/:location
     ```

     Replace `:location` with the name of the location you want to retrieve weather data for.

   - Get All Weather Data:

     ```
     GET /api/weather
     ```

   - Update Weather Data by Location:

     ```
     PUT /api/weather/:location
     ```

     Replace `:location` with the name of the location you want to update weather data for.

   - Delete Weather Data by Location:

     ```
     DELETE /api/weather/:location
     ```

     Replace `:location` with the name of the location you want to delete weather data for.

## Starting the Server

To start the server, run the following command:

```
node index.js
```

The server will be running on `http://localhost:3000`.

## Notes

- Make sure to replace the `apiKey` variable with your actual OpenWeatherMap API key in `fetchAndStoreWeatherData` function.

Feel free to explore and enhance the application as per your requirements. Happy coding!
