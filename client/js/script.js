var dashboard_app = angular.module("myApp, ['ngRoute");

dashboard_app.config(function($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: 'partials/login.html'
		})
		.when('/dashboard', {
			templateUrl: 'partials/dashboard.html'
		})
		.when('/topic', {
			templateUrl: 'partials/topic.html'
		})
		.when('/user', {
			templateUrl: 'patials/user.html'
		})
		.otherwise({
			redirectTo: '/login'
		})
})