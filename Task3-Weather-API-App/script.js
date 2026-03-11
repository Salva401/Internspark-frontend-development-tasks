async function getWeather(){

let city = document.getElementById("cityInput").value;

document.getElementById("loading").innerText = "Loading...";
document.getElementById("error").innerText = "";

try{

let response = await fetch(`https://wttr.in/${city}?format=j1`);

let data = await response.json();

document.getElementById("loading").innerText = "";

document.getElementById("cityName").innerText = city;

document.getElementById("temperature").innerText =
"Temperature: " + data.current_condition[0].temp_C + " °C";

document.getElementById("condition").innerText =
"Condition: " + data.current_condition[0].weatherDesc[0].value;

}

catch(error){

document.getElementById("loading").innerText = "";
document.getElementById("error").innerText = "Error fetching weather";

}

}