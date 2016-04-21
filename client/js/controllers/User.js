dashboard_app.controller("UserController", function($scope, $location,$routeParams, UserFactory){
	console.log($routeParams.id)
	current_user_id = {
		_id : $routeParams.id
	}

	UserFactory.getCurrUser(current_user_id, function(data){
		$scope.user = data;
	})


})
