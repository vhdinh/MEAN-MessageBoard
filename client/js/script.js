console.log("IN CLIENT/JS/SCRIPT.JS FILE")

var dashboard_app = angular.module("myApp", ['ngRoute']);

dashboard_app.config(function($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: 'static/partials/login.html'
		})
		.when('/dashboard', {
			templateUrl: 'static/partials/dashboard.html'
		})
		.when('/topic', {
			templateUrl: 'static/partials/topic.html'
		})
		.when('/user', {
			templateUrl: 'static/partials/user.html'
		})
		.otherwise({
			redirectTo: '/login'
		})
})

dashboard_app.factory("LoginFactory", function($http){
	var factory = {};
	var user;
	factory.user;

	factory.login = function(user, callback){
		console.log("LOGIN FACTORY, Login - user: ", user)
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


dashboard_app.controller("LoginController", function($scope, $location, LoginFactory){

	$scope.login = function(user){
		console.log("USER TRYING TO LOG IN : ", user)
		LoginFactory.login(user, function(data){
			$scope.user = data;
			$scope.user = {};
			$location.url('/dashboard')
		})
	}

	var get_user = function(){
		LoginFactory.getUser(function(data){
			console.log("DATATATATAT", data)
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

	//end
})

// dashboard_app.controller("DashboardController", function($scope, $location,$routeParams, LoginFactory){
// 	console.log("DASHBOARD CONTROLLER GETTING USER",LoginFactory.user)

// })



