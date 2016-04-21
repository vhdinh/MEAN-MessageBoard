// console.log("IN SERVER/CONFIG/ROUTES.JS FILE")

var users = require("../controllers/users.js");
var topics = require("../controllers/topics.js")
var posts = require("../controllers/posts.js")
var comments = require("../controllers/comments.js")



module.exports = function(app){

	app.post('/login', function(req, res){
		users.login(req, res);
	})

	app.get('/getTopics', function(req, res){
		topics.getTopics(req, res)
	})

	app.post('/addTopic', function(req, res){
		topics.addTopic(req,res);
	})

	app.get('/getComments', function(req, res){
		comments.getComments(req, res);
	})


	app.post('/getOneTopic', function(req, res) {
		topics.getOneTopic(req, res);
	})

	app.post('/getPosts', function(req, res){
		posts.getPosts(req, res)
	})

	app.post('/addPost', function(req, res){
		posts.addPost(req, res);
	})

	app.post('/getOneUser', function(req, res){
		users.getOneUser(req, res)
	})

	app.post('/likePost', function(req, res){
		posts.likePost(req,res);
	})
	app.post('/dislikePost', function(req, res){
		posts.dislikePost(req,res);
	})

	app.post('/addComment', function(req, res){
		comments.addComment(req, res);
	})


}