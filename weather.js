const COORDS = 'coords';
const API_KEY = '8e4aa03ab5dfee37f2354ed6cd4c007b';
const weather = document.querySelector(".js-weather");
const temp = document.querySelector(".js-temp");


function getWeather(lat,lng)
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response)
    {
        return response.json();
    })
    .then(function(json)
    {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText  = `${place}`;
        temp.innerText = `${temperature}`;
    });
}

function saveCoords(coordsObject)
{
    localStorage.setItem(COORDS,JSON.stringify(coordsObject));
}


function handleGeoSucces(position) 
{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude : latitude,
        longitude : longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError()
{
    console.log("asdsad");
}
function askForCoords()
{
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords()
{
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null)
    {
        askForCoords();
    }
    else
    {
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init()
{
    loadCoords();
}

init();