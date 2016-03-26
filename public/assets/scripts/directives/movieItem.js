angular.module('movieApp')
  .directive('movieItem', function(){
    return {
      restrict: 'E',
      scope: {
        title: '=',
        actors: '=',
        plot: '='
      },
      templateUrl:'/views/movie-item.html',
      controller: function($scope, $http){
        $scope.getMovies = function(movie){
          $http.get('http://www.omdbapi.com/?t='+ movie +'&y=&plot=full&r=json')
          .then(function(response){
            $scope.movies = response.data;
          });
        }

        $scope.clearMovies = function(){
          $scope.movies = [];
        }
      }
    }
  });
