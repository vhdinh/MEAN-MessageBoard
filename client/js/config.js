// console.log("IN CLIENT/JS/CONFIG.JS FILE")

var dashboard_app = angular.module("myApp", ['ngRoute']);

dashboard_app.config(function($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: 'static/partials/login.html',
			controller: "LoginController"
		})
		.when('/dashboard', {
			templateUrl: 'static/partials/dashboard.html',
			controller: "DashboardController"
		})
		.when('/topic/:id', {
			templateUrl: 'static/partials/topic.html',
			controller: "TopicController",
		})
		.when('/user/:id', {
			templateUrl: 'static/partials/user.html',
			controller: "UserController"
		})
		.otherwise({
			redirectTo: '/login'
		})
})


