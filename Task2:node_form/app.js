const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// set ejs view engine
app.set("view engine", "ejs");

//use middleware
app.use(bodyParser());

//route to retrieve form ejs form template
app.get("/form", function(req, resp, next) {
  resp.render("form");
});

app.get("/form", function(req, resp, next) {
  resp.render("form", { qs: req.query });
});
//returns json format data when form is submitted
app.post("/form", function(req, resp) {
  resp.end(JSON.stringify(req.body));
});

var host = "https://localhost:8000/form";

//listen to port
app.listen(8000, function() {
  console.log("listening at port 8000");
});
