dashboard_app.factory("TopicFactory", function($http){
	var factory = {};
	var topics = {};
	var topic = {};

	factory.index = function(callback){
		$http.get('/getTopics').success(function(output){
			topics = output;
			callback(topics);
		})
	}

	factory.addTopic = function(info, callback){
		$http.post('/addTopic', info).success(function(output){
			topics = output;
			callback(topics)
		})
	}


	factory.getOneTopic = function(info, callback){
		$http.post("/getOneTopic", info).success(function(output){
			topic = output
			callback(topic)
		})
	}



	return factory
})