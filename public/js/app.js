var gmpApp = angular.module('gmpApp', [
	'ngRoute',
	'ngSanitize',
	'gmpControllers',
	'gmpServices'
]);

gmpApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			title: '百卓前端规范及框架',
			templateUrl: 'views/guide.html',
			controller: 'guideCtrl'
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

gmpApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);