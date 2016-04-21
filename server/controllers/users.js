// console.log("IN CONTROLLERS/MODELS/USER.JS FILE")

var mongoose = require("mongoose");

var User = mongoose.model("users")

module.exports = (function(){
	return {
		login : function(req, res){
			User.findOne({name: req.body.name}, function(err, user){
				if(err){
					console.log("ERRORRR - ",err)
					res.json(err)
				}
				else{
					if(user){
						res.json(user)
					}
					else{
						var user = new User({name: req.body.name})
						user.save(function(err, user){
							if(err){
								res.json(err)
							}
							else{
								res.json(user)
							}
						})
					}
				}
			})
		},


		getOneUser: function(req, res){
			User.findOne({_id: req.body}, function(err, user){
				if(err){
					res.json(err)
				}
				else{
					res.json(user)
				}
			})
		},

	}
})();