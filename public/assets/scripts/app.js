angular.module("movieApp", ['ngRoute'])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/home', {
        templateUrl:"/views/home.html"
      })
      .when('/pics', {
        templateUrl:"views/pics.html"
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });

