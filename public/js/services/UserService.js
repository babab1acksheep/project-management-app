angular.module("UserService",[]).factory('UserService', ['$http', '$q', function($http, $q){

	return {
		
/*			fetchAllUsers: function(baseUrl) {
					return $http.get(baseUrl+'user/')
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while fetching users');
										return $q.reject(errResponse);
									}
							);
			},*/
		    
		    createUser: function(user,baseUrl){
					return $http.post(baseUrl+'/user/add', user)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while creating user');
										return $q.reject(errResponse);
									}
							);
		    }
		    
/*		    updateUser: function(user, id,baseUrl){
					return $http.put(baseUrl+'user/'+id, user)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while updating user');
										return $q.reject(errResponse);
									}
							);
			},
		    
			deleteUser: function(id,baseUrl){
					return $http.post(baseUrl+'user/'+id)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while deleting user');
										return $q.reject(errResponse);
									}
							);
			}*/
		
	};

}]);
