
# SkyTrack

A sleek, responsive weather dashboard built using native JavaScript, HTML, and CSS. Powered by the OpenWeatherMap API suite, SkyTrack provides location-specific weather conditions, air quality insights, and localized sunrise and sunset timings through a clean and intuitive interface.

## 🚀 Features

- **Smart Location Geocoding:** Converts user-entered city names into geographic coordinates using the OpenWeatherMap Geocoding API, with Bhopal as the default search location when the input is empty.

- **Current Weather Metrics:** Retrieves and displays current weather descriptions, temperature, relative humidity, atmospheric pressure, wind speed, and wind direction.

- **Air Quality Integration:** Fetches location-specific pollution data and displays the corresponding Air Quality Index (AQI).

- **Localized Sun Timings:** Processes UNIX timestamps to calculate and display sunrise and sunset timings in a human-readable local time format.

- **Concurrent API Requests:** Uses JavaScript's `Promise.all()` to fetch weather and air pollution data simultaneously, reducing unnecessary sequential network waiting.

- **Robust Error Handling:** Validates API responses, handles invalid city searches, and clears stale weather information when requests fail.

- **Fully Responsive Design:** Uses custom CSS media queries and flexible layouts to adapt the interface across desktop, tablet, and mobile screen sizes.

## 🛠️ Built With

- **HTML5:** Structured application layout and semantic elements.
- **CSS3:** Custom styling, Flexbox layouts, and responsive media queries.
- **JavaScript (ES6+):** Async/await, Fetch API, Promise.all(), and dynamic DOM manipulation.
- **Geocoding API:** Converts city names into geographic coordinates.
- **Current Weather API:** Retrieves real-time weather conditions.
- **Air Pollution API:** Provides location-specific air quality data.

## ⚙️ How It Works

1. The user enters a city name in the search bar.
2. The Geocoding API resolves the city into latitude and longitude coordinates.
3. The coordinates are used to fetch current weather and air pollution data.
4. Both requests execute concurrently using `Promise.all()`.
5. The retrieved data is processed and dynamically rendered in the dashboard.

## 📦 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/bit06zenith/SkyTrack.git
   ```

2. Navigate to the project directory:

   ```bash
   cd SkyTrack
   ```

3. Configure your OpenWeatherMap API key securely.

4. Open `index.html` in your browser or run the project using VS Code Live Server.

## 🔮 Future Enhancements

- Multi-day weather forecasting.
- Celsius, Fahrenheit, and Kelvin temperature conversion.
- Interactive weather maps and atmospheric overlays.
- Weather condition icons and dynamic backgrounds.
- Search history and favorite locations.
- Detailed AQI categories and health recommendations.

## 👨‍💻 Author

**Harleen Deo**

GitHub: [@bit06zenith](https://github.com/bit06zenith)
