const apikey = "87df8abce49824af3910ffdb655845ae"; // Note: In an enterprise app, this would be hidden behind a backend
const searchbar = document.getElementById("searchbar");

document.getElementById("searchbtn").addEventListener('click', () => {
    let cityname = searchbar.value.trim();
    if (!cityname) { cityname = "Bhopal"; }
    getData(cityname);
});

const getData = async (cityname) => {
    try {
        // 1. Fetch Geocoding Data
        const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=${apikey}`;
        const geoResponse = await fetch(geoUrl);
        
        // Validate HTTP response
        if (!geoResponse.ok) {
            throw new Error(`Geocoding API HTTP error: ${geoResponse.status}`);
        }
        
        const geoData = await geoResponse.json();
        
        // 2. Validate City Existence (Prevents crashing on data1[0].lat)
        if (!geoData || geoData.length === 0) {
            throw new Error("City not found. Please enter a valid city name.");
        }

        const { lat, lon } = geoData[0];

        // 3. Fetch Weather and AQI Concurrently (Cuts network latency in half)
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
        const aqiUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apikey}`;

        const [weatherResponse, aqiResponse] = await Promise.all([
            fetch(weatherUrl),
            fetch(aqiUrl)
        ]);

        // Validate HTTP responses for the concurrent calls
        if (!weatherResponse.ok || !aqiResponse.ok) {
            throw new Error("Failed to fetch weather or air quality data.");
        }

        const weatherData = await weatherResponse.json();
        const aqiData = await aqiResponse.json();

        // 4. Update UI gracefully
        updateUI(weatherData, aqiData);

    } catch (error) {
        console.error("Error fetching data:", error);
        // Display error to the user gracefully instead of breaking the app
        document.getElementById("des").innerText = `Error: ${error.message}`;
        clearUI();
    }
};

const updateUI = (weatherData, aqiData) => {
    const convertToMachineTime = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    document.getElementById("des").innerText = `${weatherData.name} Weather : ${weatherData.weather[0].description}`;
    document.getElementById("h").innerText = `Humidity : ${weatherData.main.humidity} %`;
    document.getElementById("p").innerText = `Pressure : ${weatherData.main.pressure} hPa`;
    document.getElementById("t").innerText = `Temperature : ${weatherData.main.temp} Kelvin`;
    document.getElementById("ws").innerText = `Wind Speed : ${weatherData.wind.speed} meter/sec`;
    document.getElementById("wd").innerText = `Wind Direction : ${weatherData.wind.deg} degrees`;
    document.getElementById("rise").innerText = `Sunrise Time : ${convertToMachineTime(weatherData.sys.sunrise)} `;
    document.getElementById("set").innerText = `Sunset Time : ${convertToMachineTime(weatherData.sys.sunset)} `;
    document.getElementById("aqi").innerText = `Air Quality Index : ${aqiData.list[0].main.aqi}`;
};

const clearUI = () => {
    // Clear out other fields if an error occurs so stale data isn't shown to the user
    document.getElementById("h").innerText = "";
    document.getElementById("p").innerText = "";
    document.getElementById("t").innerText = "";
    document.getElementById("ws").innerText = "";
    document.getElementById("wd").innerText = "";
    document.getElementById("rise").innerText = "";
    document.getElementById("set").innerText = "";
    document.getElementById("aqi").innerText = "";
};
// const apikey = "87df8abce49824af3910ffdb655845ae";
// let cityname;
// let URL1;
// document.getElementById("searchbtn").addEventListener('click',function(){
//     cityname=searchbar.value.trim();
//     if(!cityname){cityname="Bhopal";}
//     //use backticks ` to create Template Literals
//     URL1=`https://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=${apikey}`;
//     getData();
// })

// const getData = async () => {
//     let response1 = await fetch(URL1);
//     let data1 = await response1.json();
//     let lat=data1[0].lat;
//     let lon=data1[0].lon;
//     let URL2=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
//     let response2 = await fetch(URL2);
//     let data2 = await response2.json();
//     let URL3=`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apikey}`;
//     let response3 = await fetch(URL3);
//     let data3 = await response3.json();


//     const convertToMachineTime = (unixTimestamp) => {
//         const date = new Date(unixTimestamp * 1000);   // OpenWeatherMap gives seconds. JavaScript needs milliseconds.
//         return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });  //toLocaleTimeString() automatically formats to your machine's local timezone
//     };

//     document.getElementById("des").innerText =`${data2.name} Weather : ${data2.weather[0].description}`;
//     document.getElementById("h").innerText=`Humidity : ${data2.main.humidity} %`;
//     document.getElementById("p").innerText=`Pressure : ${data2.main.pressure} hPa`;
//     document.getElementById("t").innerText=`Temperature : ${data2.main.temp} Kelvin`;
//     document.getElementById("ws").innerText=`Wind Speed : ${data2.wind.speed} meter/sec`;
//     document.getElementById("wd").innerText=`Wind Direction : ${data2.wind.deg} degrees`;
//     document.getElementById("rise").innerText=`Sunrise Time : ${convertToMachineTime(data2.sys.sunrise)} `;
//     document.getElementById("set").innerText=`Sunset Time : ${convertToMachineTime(data2.sys.sunset)} `;
//     document.getElementById("aqi").innerText=`Air Quality Index : ${(data3.list[0].main.aqi)}`;
// }
