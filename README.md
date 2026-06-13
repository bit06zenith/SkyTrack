# SkyTrack
A sleek, responsive weather dashboard built with native JavaScript and CSS. Consumes OpenWeatherMap Geocoding, Current Weather, and Map APIs to deliver real-time metrics, localized air quality, precise astronomical timings, and dynamic atmospheric overlay map visualizations.

## SkyTrack Weather Dashboard
A lightweight, highly responsive frontend weather application built using semantic HTML5, modern CSS layouts, and native asynchronous JavaScript. This application communicates with multiple OpenWeatherMap API endpoints to display real-time localized weather insights.

## 🚀 Features
- **Smart Location Geocoding:** Automatically resolves search strings into exact coordinates, falling back seamlessly to a default view of Bhopal if input fields are empty.
- **Real-Time Weather Metrics:** Displays description, ambient temperature (converted from Kelvin), relative humidity, atmospheric pressure, wind velocity, and wind trajectory.
- **Air Quality Integration:** Interrogates pollution coordinates to extract and display the localized Air Quality Index (AQI).
- **Localized Machine Timings:** Parses UNIX timestamps to output exact sunrise and sunset markers relative to the browser's local timezone.
- **Dynamic Map Canvas Layering:** Implements an inline visual weather mapping engine utilizing CSS image wrappers to overlay active atmospheric thermal layers (`temp_new`) cleanly into the UI structure without external heavy mapping libraries.
- **Fully Responsive Architecture:** Uses custom CSS media breakpoints to adapt seamlessly from massive desktop configurations down to ultra-compact mobile layouts.

## 🛠️ Built With
- **HTML5:** Semantic architecture for layout integrity.
- **CSS3:** Advanced flexbox controllers, fluid sizing handles, custom corner rounding mechanics, and responsive media queries.
- **JavaScript (ES6+):** Asynchronous `fetch` chains, variable scope isolation, and dynamic DOM manipulation.
- **Data Provider:** OpenWeatherMap API Suite.
