var gmpServices = angular.module('gmpServices', []);

// post service
gmpServices.factory('Post', ['$http', function($http){
	// 
	return {
		preview: function(mark){
			// return 'Parsed: ' + content;
			return $http.post('/preview', mark);
		}
	}
}]);