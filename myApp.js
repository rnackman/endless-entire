var app = angular.module('myApp', []);

app.run(function($rootScope) {
  $rootScope.exh = {
    title: "Endless, Entire",
    subtitle: "American Abstract Artists and the Circle",
    dates: "November 21, 2015 - December 20, 2016",
    location: "FiveMyles",
    locationUrl: "http://www.fivemyles.org",
    curator: "Rachel Nackman"
  }
});

app.directive("introPanel", function(){
  return {
    restrict: 'E',
    templateUrl: 'intro-panel.html'
  };
});
