dashboard_app.controller("LoginController", function($scope, $window, $location, LoginFactory){

	$scope.login = function(user){
		console.log("user", user)
		if(!user){
			$window.alert("You need a username")
			$location.url("/login");
		}
		else{
			LoginFactory.login(user, function(data){
				$scope.user = data;
				$scope.user = {};
				$location.url('/dashboard')
			})
		}
	}

})
