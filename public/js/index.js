var app = angular.module('wordLearning', ['ngRoute']).run(function($http, $rootScope){

});

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'show.html',
		controller: 'showController'	
	})
	.when('/add', {
		templateUrl: 'add.html',
		controller: 'addController'
	})
	.when('/test', {
		templateUrl: 'test.html',
		controller: 'testController'
	})
});

app.controller('showController', function($scope){
	$scope.words = [];
});

app.controller('addController', function($scope, $http, $rootScope, $location){
	$scope.words = [];
	$scope.word = {english_word: '', hebrew_word: '', time: ''};
	$scope.error_message = '';
	
	$scope.addWord = function(){
		if($scope.word.english_word == "" || $scope.word.hebrew_word == "")
		{
			$scope.error_message = "Empty Field!";
			return;
		}
		$scope.word.time = Date.now();
		$scope.words.push($scope.word);

		$http.post('/add', $scope.word).success(function(data){
			console.log(data);
			if(data.success == 'success')
			{
				$scope.error_message = "Inserted Successfully";
				$scope.word = {english_word: '', hebrew_word: '', time: ''};
			}
			else
			{
				$scope.error_message = data.message;
			}
		});

		//console.log("Succssesfully Added Word!");
	};
});

app.conteoller('testController', function($scope){
	//Do This
});	