dashboard_app.controller("DashboardController", function($scope, $window, $location,$routeParams, LoginFactory, TopicFactory){

	var currUser = function(){
		return LoginFactory.user
	}
	currUser()

		var get_user = function(){
		LoginFactory.getUser(function(data){
			if(data){
				$scope.user = data
			}
			else{
				$location.url("/login")
			}
		})
	}
	get_user();

	$scope.logout = function(){
		$location.url("/login");
		$scope.user = {};
		LoginFactory.logout();
	}

	TopicFactory.index(function(data){
		$scope.topics = data
	})

	$scope.addTopic = function(){
		$scope.topic._user = LoginFactory.user
		if(!$scope.topic.topic) {
			$window.alert("Topic cannot be blank")
			$scope.topic = {}
		}
		else if(!$scope.topic.category) {
			$window.alert("Category cannot be blank")
			$scope.topic = {}
		}
		else {
			TopicFactory.addTopic($scope.topic, function(data){
				$scope.topics = data;
				$scope.topic = {};
			})
		}
	}
})
