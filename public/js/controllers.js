var gmpControllers = angular.module('gmpControllers', []);

// page controller
gmpControllers.controller('pageCtrl', ['$scope', 'Page', function($scope, Page){

	Page.get()
		.success(function(data){
			$scope.pages = data;
		});
	
	$scope.pageDelete = function(key){
		Page.delete(key)
			.success(function(data){
				$scope.pages = data;
			});
	}

}]);

// guide controller
gmpControllers.controller('guideCtrl', ['$scope', function($scope){

	$scope.page = {
		title: 'Guide'
	}

}]);
