const weather = document.querySelector(".weather");
const API_KEY = 'dcab2a26f2e578a02805fcb858ad3bf5';
const COORDS = 'coordinates';


function getWeather(lat, lng)
{
    console.log(lat);
    console.log(lng);
    fetch (
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        const humidity = json.main.humidity;
        const lowestTemp = json.main.temp_min;
        const highestTemp = json.main.temp_max;
        const country = json.sys.country;
        weather.innerText = `Now ${temperature} C \nHighest ${highestTemp} C \n Lowest ${lowestTemp} C \n Humidity ${humidity} \n at ${place}, ${country}`;
    });
}


function saveCoords(coordsObj)
{
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position)
{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = 
    {
        latitude,
        longitude
    };
    console.log(latitude);
    console.log(longitude);
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}


function handleGeoError()
{
}

function askForCoords()
{
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function main()
{
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) 
    {
        askForCoords();
    } 
    else 
    {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

main();

