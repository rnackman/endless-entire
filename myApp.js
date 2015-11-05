var app = angular.module('myApp', []);

app.run(function($rootScope) {
  $rootScope.introShow = true;
  $rootScope.exhShow = false;
  $rootScope.indexShow = true;
  $rootScope.exh = {
    title: "Endless, Entire",
    subtitle: "American Abstract Artists and the Circle",
    dates: "November 21, 2015 - December 20, 2016",
    location: "FiveMyles",
    locationUrl: "http://www.fivemyles.org",
    curator: "Rachel Nackman"
  };
  $rootScope.toggleIntro = function(){
    $rootScope.introShow = $rootScope.introShow == true ? false : true;
    $rootScope.exhShow = true;
  };
});

// Borrowed from @poacher2k - http://jsfiddle.net/8P6mf/2/
var ngPackery = app.directive('ngPackery', ['$rootScope', function($rootScope){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      console.log('Running ngPackery linking function!');
      if($rootScope.packery === undefined || $rootScope.packery === null){
        console.log('making packery!');
        $rootScope.packery = new Packery(element[0].parentElement,
          {
            itemSelector: '.artwork',
            columnWidth: '.artwork',
            gutter: 100
          }
        );
        $rootScope.packery.bindResize();
        $rootScope.packery.appended(element[0]);
        $rootScope.packery.items.splice(1,1);
      } else {
        $rootScope.packery.appended(element[0]);
      }
      $rootScope.packery.layout();
    }
  };
}]);

app.controller('IndexController', function($scope){
  $scope.artists = ['Emily Berger', 'Creighton Michael', 'Vera Vasek', 'Anne Russinoff'];
});

app.controller('ExhibitionController', function($scope, $http){
  artworks.fetch().then(function(data) {
    $scope.artworks = data;
  });
});

app.factory('artworks', function($timeout, $http) {
  var Artworks = {
    fetch: function() {
      return $timeout(function(){
        return $http.get('checklist.json').then(function(response) {
          return response;
        });
      }, 30);
    }
  };
  return Artworks;
});
