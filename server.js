console.log("IN ROOT FOLDER SERVER.JS FILE")

var express = require("express");

var app = express();

var path = require("path");

var bodyParser = require("body-parser")

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./node_module")));

app.use(express.static(path.join(__dirname, "./client")));

// require("server/config/mongoose.js")

// require("server/config/routes.js")(app);

path = 8000;
app.listen(port, function(){
	console.log("**********     PORT 8000     **********")
})