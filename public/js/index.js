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

app.controller('showController', function($scope, $http, $rootScope, $location){
	$scope.words = [];
	$http.get('/show').success(function(data){
		if (data != "error")
		{
			for(var x = 0; x< data.length; x++)
			{
				$scope.words.push(data[x]);
				console.log(data[x]);			
			}
			$scope.words;
		}		
	});
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
			if(data.hebrew_word != undefined)
			{
				$scope.error_message = "Inserted Successfully";
				console.log("Word added:\n Hebrew: " + data.hebrew_word + "\nEnglish: " + data.english_word);
				$scope.word = {english_word: '', hebrew_word: '', time: ''};
			}
			else
			{
				$scope.error_message = data;
			}
		});

	};
});

app.controller('testController', function($scope, $http, $rootScope, $location){
	$scope.words = [];
	$http.get('/show').success(function(data){
		if (data != "error")
		{
			for(var x = 0; x< data.length; x++)
			{
				word = {
					id: data[x].id,
					english_word: data[x].english_word,
					hebrew_word: ""
				};
				console.log(word);			
				$scope.words.push(word);
			}
			$scope.words;
		}		
	});

	$scope.check = function(word){
		console.log(word);
		$http.post('/test', word).success(function(data){
			if(data)
			{
				word.status = 'True';
			}
			else
			{
				word.status = 'False';
			}
		});
	};
});	