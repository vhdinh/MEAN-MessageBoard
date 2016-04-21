// console.log("IN CONTROLLERS/MODELS/TOPICS.JS FILE")

var mongoose = require("mongoose");
var Topic = mongoose.model("topics");
var User = mongoose.model("users");
module.exports = (function(){
	return {

		getTopics : function(req, res){

			Topic.find({}).populate("_user").populate("_postings").exec(function(err, topic){
				if(err){
					res.json(err)
				}
				else{
					res.json(topic)
				}
			})
		},


		addTopic: function(req, res){
			new_topic = new Topic(req.body)
			console.log("NEW TOPIC OBJECT ", new_topic)
			new_topic.save(function(err){
				if(err){
					res.json(err)
				}
				else {
					User.findOne({_id: req.body._user._id}, function(err, user){
						user._topics.push(new_topic)
						user.save()
					})
					
				}
				res.redirect('/getTopics')
			})
		},

		getOneTopic : function(req, res){
			Topic.findOne({_id: req.body._id}).populate("_user").populate("_postings").exec(function(err, topic){
				if(err){
					res.json(err)
				}
				else {
					res.json(topic)
				}
			})
		},

	}
})();