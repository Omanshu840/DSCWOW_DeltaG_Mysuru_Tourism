async function getWeather() {
    let response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Mysuru&units=metric&appid=69686c974eab1d57671477cd89aef9b2");
    let data = await response.json();
    return data;
}