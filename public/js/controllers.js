var gmpControllers = angular.module('gmpControllers', []);

// post controller
gmpControllers.controller('postCtrl', ['$scope', 'Post', function($scope, Post){
	// 
	$scope.mark = {
		title: '',
		content: '',
		date: ''
	};
	$scope.html = {};

	// $scope.html.content = Post.preview($scope.mark.content);

	$scope.postChange = function(event){
		Post.preview($scope.mark)
			.success(function(data){
				$scope.html.content = data.content;
			});
	}
}]);

// guide controller
gmpControllers.controller('guideCtrl', ['$scope', function($scope){
	//
	$scope.page = {
		title: 'Guide'
	} 
}]);