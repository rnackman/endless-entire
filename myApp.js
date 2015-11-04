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

app.controller('ExhibitionController', function($scope){
  $scope.artworks = [
    {
      artist: "Emily Berger",
      title: "Painting 1",
      date: 1985,
      medium: "oil on paper",
      imgsrc: 'images/Hsiao.jpg'
    },
    {
      artist: "Emily Berger",
      title: "Painting 2",
      date: 1992,
      medium: "oil on canvas"
    },
    {
      artist: "Creighton Michael",
      title: "Painting 3",
      date: 1985,
      medium: "oil on paper"
    },
    {
      artist: "Creighton Michael",
      title: "Painting 5",
      date: 1992,
      medium: "oil on canvas"
    },
    {
      artist: "Vera Vasek",
      title: "Drawing 8",
      date: 1985,
      medium: "oil on paper"
    },
    {
      artist: "Vera Vasek",
      title: "Painting 2",
      date: 1992,
      medium: "oil on canvas"
    },
    {
      artist: "Anne Russinoff",
      title: "Drawing 1",
      date: 1985,
      medium: "oil on paper"
    },
    {
      artist: "Anne Russinoff",
      title: "Drawing 2",
      date: 1992,
      medium: "oil on canvas"
    }
  ];
});
