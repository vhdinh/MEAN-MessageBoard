dashboard_app.factory("PostFactory", function($http){
	var factory = {};
	var posts = {};

	factory.getPosts = function(info, callback){
		$http.post('/getPosts', info).success(function(output){
			posts = output;
			callback(posts);
		})
	}

	factory.addPost = function(info, callback){
		$http.post('/addPost',info).success(function(output){
			posts = output;
			callback(posts);
		})
	}

	factory.likePost = function(info, callback){
		$http.post('/likePost', info).success(function(output){
			topic = output
			callback(topic)
		})
	}

	factory.dislikePost = function(info, callback){
		$http.post('/dislikePost', info).success(function(output){
			topic = output
			callback(topic)
		})
	}

	return factory
})