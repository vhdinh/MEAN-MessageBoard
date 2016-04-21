console.log("IN CONTROLLERS/MODELS/POSTS.JS FILE")

var mongoose = require("mongoose");

var Post = mongoose.model("postings")
var Topic = mongoose.model("topics")
var User = mongoose.model("users");

module.exports = (function(){
	return {

		getPosts: function(req, res){
			Post.find({_topic: req.body._id}).populate('_user').populate("_topic").populate("_comments").exec(function(err, post){
				if(err){
					res.json(err)
				}
				else{
					res.json(post)
				}
			})
		},


		addPost : function(req, res){
			var user_id = req.body._user._id
			var topic_id = req.body._topic._id
			new_post = new Post({message: req.body.post, _user: user_id, _topic: topic_id})
			console.log(new_post)
			new_post.save(function(err, post){
				if(err){
					res.json(err)
				}
				else{
					Topic.findOne({_id: topic_id}).populate("_postings").populate("_user").exec(function(err, topic){
						topic._postings.push(new_post._id)
						topic.save()
					})
					User.findOne({_id: user_id}).populate("_postings").exec(function(err, user){
						user._postings.push(new_post._id)
						user.save()
					})
					res.json(post)
				}
			})

		},


		likePost : function(req, res){
			Post.findOne({_id: req.body._id}, function(err, post){
				post.likes +=1;
				post.save();
				res.json(post)
			})
		},
		dislikePost : function(req, res){
			Post.findOne({_id: req.body._id}, function(err, post){
				post.dislikes +=1;
				post.save();
				res.json(post)
			})
		},


	}
})();