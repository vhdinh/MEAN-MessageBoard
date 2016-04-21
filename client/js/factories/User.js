dashboard_app.factory("UserFactory", function($http){
	var factory = {};

	var user = {};

	factory.getCurrUser = function(info, callback){
		$http.post("/getOneUser", info).success(function(output){
			user = output;
			callback(user)
		})
	}

	return factory
})