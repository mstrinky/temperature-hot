const apiKey = `0c64b47d867cace70024e7d16a2d6494`;
const searchTemperature =()=>{
    const city = document.getElementById('city-name').ariaValueMax;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    // console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemperature(data));
}
const displayTemperature = temperature =>{
    console.log(temperature);
}