console.log("IN SERVER/CONFIG/ROUTES.JS FILE")

var users = require("../controllers/users.js");

module.exports = function(app){

	app.post('/login', function(req, res){
		console.log("ROUTES LOGGIN IN USER: ", req.body)
		users.login(req, res);
	})


}