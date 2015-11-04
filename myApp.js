var app = angular.module('myApp', []);

app.run(function($rootScope) {
  $rootScope.introShow = true;
  $rootScope.exhShow = false;
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

app.controller('ExhibitionController', function($scope){
  $scope.artists = [
    {
      name: "Emily Berger",
      artworks: [
        {
          title: "Painting 1",
          date: 1985,
          medium: "oil on paper",
          imgsrc: 'images/Hsiao.jpg'
        },
        {
          title: "Painting 2",
          date: 1992,
          medium: "oil on canvas"
        }
      ],
      nationality: "American"
    },
    {
      name: "Creighton Michael",
      artworks: [
        {
          title: "Painting 3",
          date: 1985,
          medium: "oil on paper"
        },
        {
          title: "Painting 5",
          date: 1992,
          medium: "oil on canvas"
        }
      ],
      nationality: "American"
    },
    {
      name: "Vera Vasek",
      artworks: [
        {
          title: "Drawing 8",
          date: 1985,
          medium: "oil on paper"
        },
        {
          title: "Painting 2",
          date: 1992,
          medium: "oil on canvas"
        }
      ],
      nationality: "American"
    },
    {
      name: "Anne Rusinoff",
      artworks: [
        {
          title: "Drawing 1",
          date: 1985,
          medium: "oil on paper"
        },
        {
          title: "Drawing 2",
          date: 1992,
          medium: "oil on canvas"
        }
      ],
      nationality: "American"
    }
  ];
});
