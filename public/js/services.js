var gmpServices = angular.module('gmpServices', []);

// post service
gmpServices.factory('Page', ['$http', function($http){
	// 
	return {
		get: function(){
			return $http.get('/list');
		},
		delete: function(key){
			return $http.delete('/delete/' + key);
		}
	}
}]);