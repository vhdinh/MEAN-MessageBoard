dashboard_app.factory("CommentFactory", function($http){
	var factory = {};
	var comments = {};

	factory.getComments = function(callback){
		$http.get('/getComments').success(function(output){
			comments = output;
			callback(comments);
		})
	}



	factory.addComment = function(comment, callback){
		console.log("IN COMMENT FACTORY ", comment)
		$http.post('/addComment', comment).success(function(output){
			comments = output;
			callback(comments)
		})
	}

	return factory
})