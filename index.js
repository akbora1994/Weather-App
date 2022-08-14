function getData(){
    let city = document.getElementById("city").value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb0c6171c3b082fb5381fda59597befe`;
   //console.log(url);

    fetch(url).then(function(res){
        return res.json();
    }).then(function(res){
        console.log(res);
        akshay(res);
    }).catch(function(err){
        console.log(err);
    })
}

function getDataLocation(lat,lon){
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=eb0c6171c3b082fb5381fda59597befe`;
   //console.log(url);

    fetch(url).then(function(res){
        return res.json();
    }).then(function(res){
        console.log(res);
        akshay(res);
    }).catch(function(err){
        console.log(err);
    })
}

function akshay(data){
let container = document.getElementById("container");
container.innerText=null;
let map1= document.getElementById("gmap_canvas");

let city = document.createElement("p")
city.innerText=`City: ${data.name}`;
let max = document.createElement("p");
max.innerText=`Max temp: ${Math.ceil(data.main.temp_max-273)} degree celcius`;
let min = document.createElement("p");
min.innerText=`Min temp: ${Math.ceil(data.main.temp_min-273)} degree celcius`;
let current = document.createElement("p");
current.innerText=`Current temp: ${Math.ceil(data.main.temp-273)} degree celcius`;

let humidity =  document.createElement("p");
humidity.innerText=`Humidity: ${data.main.humidity} %`;

container.append(city,max,min,current,humidity);

map1.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

}

function getWeather(){

navigator.geolocation.getCurrentPosition(success);
function success(position) {
var crd = position.coords;

console.log('Your current position is:');
console.log(`Latitude : ${crd.latitude}`);
console.log(`Longitude: ${crd.longitude}`);
console.log(`More or less ${crd.accuracy} meters.`);
getDataLocation(crd.latitude,crd.longitude)
}

}