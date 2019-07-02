var express = require("express");
var path = require("path");
const pug = require("pug");
var request = require("request");
var bodyParser = require("body-parser");
var urlEncodedParser = bodyParser.urlencoded({ extended: true });
var app = express();
//set path for views folder
app.set("views", path.join(__dirname, "views"));
// set view engine
app.set("view engine", "pug");

//api key from openweathermap which allows us to get current weather for many cities
app.get("/weather", function(req, res) {
  if (!req.query.input) {
    var vegas = "Las Vegas";
    let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${vegas}&units=metric&appid=df83fe40065f9ffb57d8b8d37e5e48f1`;
    request(url1, function(error, response, body) {
      climate_json = JSON.parse(body);
      console.log(climate_json);

      var defaultWeather = {
        city: climate_json.name,
        temperature: Math.round(climate_json.main.temp),
        description: climate_json.weather[0].description,
        icon: climate_json.weather[0].icon
      };

      res.render("weather", defaultWeather);
    });
  } else {
    let city = req.query.input;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=df83fe40065f9ffb57d8b8d37e5e48f1`;
    request(url, function(error, response, body) {
      climate_json = JSON.parse(body);
      console.log(climate_json);

      var weather = {
        city: climate_json.name,
        temperature: Math.round(climate_json.main.temp),
        description: climate_json.weather[0].description,
        icon: climate_json.weather[0].icon
      };

      res.render("result", weather);
    });
  }
});
//listen to port
app.listen(8880, function() {
  console.log("server started on port 8880");
});
