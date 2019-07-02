const express = require("express");
const path = require("path");
const app = express();

//set static folder
app.use(express.static(path.join(__dirname, "public")));

const Port = process.env.Port || 8080;
//listen to port
app.listen(Port, () => console.log(`Server started on port ${Port}`));
