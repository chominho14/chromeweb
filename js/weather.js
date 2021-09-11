const MY_WEATHER_ID_KEY = "8f48ad02bfcf78081ef369f6ff323b42";
/*
function geoOk(position){
    const lett = position.coords.latitude;
    const longt = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lett}&lon=${longt}&appid=${MY_WEATHER_ID_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = data.name;
        city.innerText = `${data.weather[0].main} /  ${data.main.temp}`;
    });
}
*/

async function geoOkFetch(position){
    const lett = position.coords.latitude;
    const longt = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lett}&lon=${longt}&appid=${MY_WEATHER_ID_KEY}&units=metric`;
    
    let response = await fetch(url);
    let data = await response.json();

    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weather.innerText = data.name;
    city.innerText = `${data.weather[0].main} /  ${data.main.temp}`;
}

function goeErr(){
    alert("You can`t find your location");
}
navigator.geolocation.getCurrentPosition(geoOkFetch , goeErr);



