var app = angular.module('olympianApp', []);

app.controller('MainController', function($scope, $http){

  $scope.show = false;

  $scope.athletes = {
    weightlifting: {},
    triathlon: {},
    archery: {},
    boxing: {},
    fencing: {}
  };

  $scope.sports = ['weightlifting', 'triathlon', 'archery', 'boxing', 'fencing'];

  var configAthletes = {
    method: 'GET',
    url: ''
  };

  function handleFailure(response){
    console.log('fail');
  };

  function callAthletes(sport) {
    configAthletes.url = '/olympics/' + sport;
    $http(configAthletes).then(function(response){
      $scope.athletes[sport] = response.data;}, handleFailure);
  }

  $scope.getOlympians = function(){
    $scope.show = true;
    for (var i = 0; i < $scope.sports.length; i++){
      callAthletes($scope.sports[i]);
    }
  };
});
