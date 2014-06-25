var gmpControllers = angular.module('gmpControllers', []);

// page controller
gmpControllers.controller('pageCtrl', ['$scope', 'Page', function($scope, Page){

	Page.get()
		.success(function(data){
			$scope.pages = data;
		});
	
	$scope.edit = {
		pageName: 'ddddd'
	}

}]);

// guide controller
gmpControllers.controller('guideCtrl', ['$scope', function($scope){

	$scope.page = {
		title: 'Guide'
	}

}]);
