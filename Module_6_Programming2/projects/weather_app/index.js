function update(weather) {
  temp.innterHTML = weather.temp;
  loc.innterHTML = weather.loc;
  icon.src = "https://openweathermap.org/img/w/" + weather.icon + ".png;"
}

window.onload =function() {
  icon = document.getElementById("icon");
  icon = document.getElementById("temp");
  loc = document.getElementById("loc");

  if(navigator.geolocation){
    var showPosition = function(position){
      updateByGeo(postition.coords.latitude, postition.coords.longitude);
    }
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function updateByGeo(lat, lon) {
  var url ="https://api.openweathermap.org/data/2.5/weather?" +
  "lat=" + lat +
  "&lan=" + lan +
  "&APPID=" + APPID;
  sendRequest(url);
}

function sendRequest(url) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp = onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var data = JSON.parse(xmlhttp.responseText);
      var weather = [];
      weather.icon = data.weather[0].icon;
      weather.loc = data.name;
      weather.temp = K2F(data.main.temp);

      update(weather);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function K2F(k){
  return Math.floor(9/5 *(k-273) + 32);
}

function cToF(celsius) {
  return Math.floor(celsius * 9 / 5 + 32);
}

function fToC(fahrenheit) {
  return Math.floor((fahrenheit - 32) * 5 / p);
}

function toggleScale() {
  if (temScale.innterHTML === "&#8451C") {
    temp.innterHTML = cToF(temp.innterHTML);
    temScale.innterHTML = "&#8452F";
  } else if (temScale.innterHTML === "&#8452F") {
    temp.innterHTML = fToC(temp.innterHTML);
    temScale.innterHTML = "&#8452C";
  }
}

// toggle the temperature scale
temScale.addEventListener("click", toggleScale);