console.log("IN CONTROLLERS/COMMENTS.JS FILE")

var mongoose = require("mongoose");

var Post = mongoose.model("postings")
var Topic = mongoose.model("topics")
var User = mongoose.model("users");
var Comment = mongoose.model("comments")

module.exports = (function(){
	return {


		getComments : function(req, res){
			Comment.find({}).populate('_user').exec(function(err, comment){
				if(err){
					res.json(err)
				}
				else{
					res.json(comment)
				}
			})
		},

		addComment : function(req, res){
			// console.log("IN COMMENTS CONTROLLER - ", req.body)
			new_comment = new Comment({comment: req.body.comment, _user: req.body._user, _posting: req.body._posting})
			// console.log("NEW COMMETN GONNA BE ADDED - ", new_comment)
			new_comment.save(function(err, comment){
				if(err){
					res.json(err)
				}
				else{
					Post.findOne({_id: req.body._posting}, function(err, post){
						post._comments.push(new_comment._id)
						post.save()
					})
					User.findOne({_id: req.body._user}, function(err, user){
						user._comments.push(new_comment.id)
						user.save()
					})
					res.json(comment)
				}
			})
		},

	}
})();