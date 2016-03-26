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
          $http.get('http://http://www.omdbapi.com/?t='+ movie +'&y=&plot=full&r=json')
        }
      }
    }
  });
