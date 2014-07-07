var gmpControllers = angular.module('gmpControllers', []);

// page controller
gmpControllers.controller('pageCtrl', ['$scope', 'Page', function($scope, Page){

//	Page.get()
//		.success(function(data){
//			$scope.pages = data;
//		});


	$scope.pageDelete = function(key){
		Page.delete(key)
			.success(function(){
//				$scope.pages = data;
                console.log('Delete Success!');
			});
//        console.log('ddd');
//        $http.delete('/delete/' + key)
//            .success(function(){
//                console.log('Delete Success!');
//            });
	}

}]);
