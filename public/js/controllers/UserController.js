'use strict';

angular.module('UserCtrl',[]).controller('UserController', ['$scope', 'UserService','$location', function($scope, UserService, $location) {
	      var baseUrl = $location.absUrl();
          var self = this;
          self.user={id:null,firstName:'',lastName:'',email:'',employeeId:'',designation:''};
          //self.users=[];
              
/*          self.fetchAllUsers = function(baseUrl){
              UserService.fetchAllUsers(baseUrl)
                  .then(
      					       function(d) {
      						        self.users = d;
      					       },
            					function(errResponse){
            						console.error('Error while fetching Currencies');
            					}
      			       );
          };*/
           
          self.createUser = function(user,baseUrl){
          	console.log(baseUrl);
              UserService.createUser(user,baseUrl)
		              .then(
                      self.fetchAllUsers, 
				              function(errResponse){
					               console.error('Error while creating User.');
				              }	
                  );
          };

/*         self.updateUser = function(user, id,baseUrl){
              UserService.updateUser(user, id,baseUrl)
		              .then(
				              self.fetchAllUsers, 
				              function(errResponse){
					               console.error('Error while updating User.');
				              }	
                  );
          };

         self.deleteUser = function(id,baseUrl){
              UserService.deleteUser(id,baseUrl)
		              .then(
				              self.fetchAllUsers, 
				              function(errResponse){
					               console.error('Error while deleting User.');
				              }	
                  );
          };*/

/*          self.fetchAllUsers(baseUrl);*/

          self.submit = function() {
              if(self.user.id==null){
                  console.log('Saving New User', self.user);    
                  self.createUser(self.user,baseUrl);
              }else{
                  //self.updateUser(self.user, self.user.id);
                  console.log('User updated with id ', self.user.employeeId);
              }
              self.reset();
          };
              
/*          self.edit = function(id,baseUrl){
              console.log('id to be edited', id);
              for(var i = 0; i < self.users.length; i++){
                  if(self.users[i].id == id) {
                     self.user = angular.copy(self.users[i]);
                     break;
                  }
              }
          };*/
/*              
          self.remove = function(id,baseUrl){
              console.log('id to be deleted', id);
              if(self.user.id === id) {//clean form if the user to be deleted is shown there.
                 self.reset();
              }
              self.deleteUser(id,baseUrl);
          };*/

          
          self.reset = function(){
              self.user={id:null,firstName:'',lastName:'',email:'',employeeId:'',designation:''};
              $scope.myForm.$setPristine(); //reset Form
          };

      }]);
