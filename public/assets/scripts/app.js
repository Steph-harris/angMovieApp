angular.module("movieApp", ['ngRoute'])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/home', {
        templateUrl:"/views/home.html"
      });

    // $stateProvider
    // .state('home', {
    //   url: '/home',
    //   templateUrl: '/views/home.html'
    // });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });

