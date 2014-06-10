var gmpApp = angular.module('gmpApp', [
	'ngRoute',
	'ngSanitize',
	'gmpControllers',
	'gmpServices'
]);

gmpApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			title: 'GMP - 百卓前端规范及框架',
			templateUrl: 'views/guide.html',
			controller: 'guideCtrl'
		})
		.when('/post', {
			title: '创建文档',
			templateUrl: 'views/post.html',
			controller: 'postCtrl'
		})
		.when('/list', {
			title: '文档列表',
			templateUrl: 'views/list.html',
			controller: 'postCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);