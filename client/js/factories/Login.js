dashboard_app.factory("LoginFactory", function($http){
	var factory = {};
	var user;
	factory.user;

	factory.login = function(user, callback){
		$http.post('/login', user).success(function(output){
			factory.user = output;
			callback(factory.user);
		})
	}

	factory.getUser = function(callback){
		callback(factory.user)
		$http.get
	}

	factory.logout = function(){
		factory.user = undefined;
	}
	return factory
})
