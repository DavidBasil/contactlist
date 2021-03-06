var myApp = angular.module('myApp', [])
myApp.controller('appCtrl', ['$scope', '$http', function($scope, $http){
	// get contacts
	var refresh = function(){
		$http.get('/contactlist')
			.then(function(response){
				console.log('I got the data')
				$scope.contactList = response.data
				$scope.contact = null
			})
	}
	refresh()
	// add contact
	$scope.addContact = function(){
		console.log($scope.contact)
		$http.post('/contactlist', $scope.contact)
			.then(function(response){
				console.log(response)
				refresh()
			})
		}
	// remove contact
	$scope.remove = function(id){
		console.log(id)
		$http.delete('/contactlist/' + id)
			.then(function(response){
				refresh()
			})
	}
	// edit contact
	$scope.edit = function(id){
		console.log(id)
		$http.get('/contactlist/' + id)
			.then(function(response){
				$scope.contact = response.data
			})
	}	
	// update contact
	$scope.update = function(){
		console.log($scope.contact._id)
		$http.put('/contactlist/' + $scope.contact._id, $scope.contact)
			.then(function(response){
				refresh()
			})
	}
	// deselect
	$scope.deselect = function(){
		$scope.contact = ''
	}


}])
