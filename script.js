const apikey = "87df8abce49824af3910ffdb655845ae";
let cityname;
let URL1;
document.getElementById("searchbtn").addEventListener('click',function(){
    cityname=searchbar.value.trim();
    if(!cityname){cityname="Bhopal";}
    //use backticks ` to create Template Literals
    URL1=`https://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=${apikey}`;
    getData();
})

const getData = async () => {
    let response1 = await fetch(URL1);
    let data1 = await response1.json();
    let lat=data1[0].lat;
    let lon=data1[0].lon;
    let URL2=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
    let response2 = await fetch(URL2);
    let data2 = await response2.json();
    let URL3=`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apikey}`;
    let response3 = await fetch(URL3);
    let data3 = await response3.json();


    const convertToMachineTime = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);   // OpenWeatherMap gives seconds. JavaScript needs milliseconds.
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });  //toLocaleTimeString() automatically formats to your machine's local timezone
    };

    document.getElementById("des").innerText =`${data2.name} Weather : ${data2.weather[0].description}`;
    document.getElementById("h").innerText=`Humidity : ${data2.main.humidity} %`;
    document.getElementById("p").innerText=`Pressure : ${data2.main.pressure} hPa`;
    document.getElementById("t").innerText=`Temperature : ${data2.main.temp} Kelvin`;
    document.getElementById("ws").innerText=`Wind Speed : ${data2.wind.speed} meter/sec`;
    document.getElementById("wd").innerText=`Wind Direction : ${data2.wind.deg} degrees`;
    document.getElementById("rise").innerText=`Sunrise Time : ${convertToMachineTime(data2.sys.sunrise)} `;
    document.getElementById("set").innerText=`Sunset Time : ${convertToMachineTime(data2.sys.sunset)} `;
    document.getElementById("aqi").innerText=`Air Quality Index : ${(data3.list[0].main.aqi)}`;
}
