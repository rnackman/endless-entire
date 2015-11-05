var app = angular.module('myApp', []);

app.run(function($rootScope, $timeout) {
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
  };
  $rootScope.openExh = function(){
    $rootScope.exhShow = true;
    $rootScope.introShow = false;
    $timeout(function(){
      $rootScope.packery.reloadItems();
      $rootScope.packery.layout();
    }, 100);
  };
});

// Packery directive by @poacher2k - http://jsfiddle.net/8P6mf/2/ - with small modifications.
var ngPackery = app.directive('ngPackery', ['$rootScope', function($rootScope){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      if($rootScope.packery === undefined || $rootScope.packery === null){
        $rootScope.packery = new Packery(element[0].parentElement,
          {
            itemSelector: '.artwork',
            columnWidth: '.artwork',
            gutter: 100,
            transitionDuration: '0.6s'          }
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
});

app.controller('ExhibitionController', ['$scope', '$rootScope', function($scope, $rootScope){
  $scope.artworks = [];
  $rootScope.artists.forEach(function(artist) {
    artist.artworks.forEach(function(artwork) {
      artwork.artist = artist.first_name+" "+artist.last_name;
      $scope.artworks.push(artwork);
    });
  });
}]);

app.run(function($rootScope) {
  $rootScope.artists = [
    {
    "last_name" : "Adams",
    "first_name" : "Alice",
    "dates" : 1930,
    "birthplace" : "New York, NY",
    "artworks": [{
        "imgsrc" : "adams_alice_04",
        "title" : "Scroll Circle, preliminary study 3",
        "date" : 1998,
        "medium" : "graphite on rag paper",
        "dimensions" : "10 1/2 x 8 1/4",
        "credit" : "",
        "pricenotes" : "",
        "price" : "NFS"
    }],
    "email" : "adamsgordy@optonline.net",
    "website" : "aliceadamssculpture.com",
    "location" : "Bronx, NY"
    },
    {
    "last_name" : "Ball",
    "first_name" : "Martin",
    "dates" : 1948,
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Ball.jpg",
        "title" : "Untitled",
        "date" : 2015,
        "medium" : "watercolor, pastel and solvent marker on paper",
        "dimensions" : "22 x 15",
        "credit" : "",
        "pricenotes" : "framed",
        "price" : 800
    }],
    "email" : "mewlab2@att.net",
    "website" : "",
    "location" : "Kent, OH"
    },
    {
    "last_name" : "Berg",
    "first_name" : "Siri",
    "dates" : 1921,
    "birthplace" : "Stockholm, Sweden",
    "artworks": [{
        "imgsrc" : "berg_siri_02",
        "title" : "Phases Series: Tape Drawing I",
        "date" : 1978,
        "medium" : "tape on graph paper",
        "dimensions" : "16 1/2 x 16 1/2",
        "credit" : "",
        "pricenotes" : "as a pair only",
        "price" : 5000
    },
    {
        "imgsrc" : "berg_siri_05",
        "title" : "Phases Series: Tape Drawing II",
        "date" : 1978,
        "medium" : "tape on graph paper",
        "dimensions" : "16 1/2 x 16 1/2",
        "credit" : "",
        "pricenotes" : "",
        "price" : "",
    }],
    "email" : "siriberg@earthlink.net",
    "website" : "siriberg.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Berger",
    "first_name" : "Emily",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Berger.jpg",
        "title" : "Untitled (with drip)",
        "date" : 2015,
        "medium" : "ink over etching on paper",
        "dimensions" : "21 x 15",
        "credit" : "",
        "pricenotes" : "framed",
        "price" : 800
    }],
    "email" : "eberger90@aol.com",
    "website" : "emilyberger.net",
    "location" : "Brooklyn, NY"
    },
    {
    "last_name" : "Bonfils",
    "first_name" : "Susan",
    "dates" : 1949,
    "birthplace" : "Los Angeles, CA",
    "artworks": [{
        "imgsrc" : "bonfils_susan_04",
        "title" : "Collective Diversity #4",
        "date" : 2015,
        "medium" : "mixed media",
        "dimensions" : "16 x 14",
        "credit" : "",
        "pricenotes" : "",
        "price" : 750
    }],
    "email" : "sbonfils@cox.net",
    "website" : "",
    "location" : "Baton Rouge, LA"
    },
    {
    "last_name" : "Boothe",
    "first_name" : "Power",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "boothe_power_06",
        "title" : "Ellipsis #18",
        "date" : 2015,
        "medium" : "gouache on paper",
        "dimensions" : "15 1/2 x 15",
        "credit" : "",
        "pricenotes" : "",
        "price" : 180
    }],
    "email" : "power.boothe@gmail.com",
    "website" : "powerboothe.com",
    "location" : "Western CT"
    },
    {
    "last_name" : "Brant",
    "first_name" : "Sharon",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Brant_5.jpeg",
        "title" : "1976 Drawing #5",
        "date" : 1976,
        "medium" : "graphite and marker on translucent vellum",
        "dimensions" : "11 x 14",
        "credit" : "",
        "pricenotes" : "",
        "price" : 280
    },
    {
        "imgsrc" : "Brant_3.jpeg",
        "title" : "1976 Drawing #3",
        "date" : 1976,
        "medium" : "graphite and marker on translucent vellum",
        "dimensions" : "11 x 14",
        "credit" : "",
        "pricenotes" : "",
        "price" : 280
    }],
    "email" : "sbrant@optonline.net",
    "website" : "",
    "location" : ""
    },
    {
    "last_name" : "Brown",
    "first_name" : "Henry",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "brown_henry_01",
        "title" : "Untitled",
        "date" : 2015,
        "medium" : "graphite on paper",
        "dimensions" : "11 x 14",
        "credit" : "",
        "pricenotes" : "",
        "price" : "NFS"
    }],
    "email" : "hbrown@henrybrown.email",
    "website" : "henrybrown.com",
    "location" : ""
    },
    {
    "last_name" : "Brown",
    "first_name" : "Marvin",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Brown_Marvin.JPG",
        "title" : "Incident just inside the garden wall",
        "date" : 2012,
        "medium" : "transfer drawing on paper",
        "dimensions" : "8 3/4 x 11",
        "credit" : "",
        "pricenotes" : "",
        "price" : 900
    }],
    "email" : "marvinbrown38@gmail.com",
    "website" : "",
    "location" : "Port Washington, NY"
    },
    {
    "last_name" : "Clark",
    "first_name" : "James O.",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "clark_james_01",
        "title" : "Untitled",
        "date" : 2008,
        "medium" : "charcoal, pastel, phosphorescent pigment and graphite on Arches paper",
        "dimensions" : "24 x 18",
        "credit" : "",
        "pricenotes" : "",
        "price" : 350
    }],
    "email" : "jimoclark@yahoo.com",
    "website" : "",
    "location" : "Brooklyn, NY"
    },
    {
    "last_name" : "Deleget",
    "first_name" : "Matthew",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "deleget_matthew_03",
        "title" : "Ghost Painting 38",
        "date" : 2007,
        "medium" : "orange enamel spray paint on fluorescent yellow-orange paper",
        "dimensions" : "11 x 14",
        "credit" : "",
        "pricenotes" : "framed",
        "price" : 1500
    },
    {
        "imgsrc" : "deleget_matthew_05",
        "title" : "Ghost Painting 40",
        "date" : 2007,
        "medium" : "fluorescent orange enamel spray paint on fluorescent yellow-orange paper",
        "dimensions" : "11 x 14",
        "credit" : "",
        "pricenotes" : "framed",
        "price" : 1500
    }],
    "email" : "matthewdeleget@gmail.com",
    "website" : "matthewdeleget.com",
    "location" : "Brooklyn, NY"
    },
    {
    "last_name" : "Evertz",
    "first_name" : "Gabriele",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "evertz_gabriele_03",
        "title" : "Untitled",
        "date" : 2009,
        "medium" : "acrylic on paper",
        "dimensions" : "18 x 24",
        "credit" : "Courtesy of MINUS SPACE",
        "pricenotes" : "",
        "price" : 1700
    }],
    "email" : "gevertz1@earthlink.net",
    "website" : "gabrieleevertz.com",
    "location" : "Brooklyn, NY"
    },
    {
    "last_name" : "Glück",
    "first_name" : "Heidi",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "gluck_heidi_04",
        "title" : "Untitled",
        "date" : "2013/2014",
        "medium" : "acrylic and ink on paper",
        "dimensions" : "8 x 10",
        "credit" : "",
        "pricenotes" : "",
        "price" : "NFS"
    }],
    "email" : "hg.luck@verizon.net",
    "website" : "",
    "location" : "Jersey City, NJ"
    },
    {
    "last_name" : "Goodyear",
    "first_name" : "John",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "goodyear_john_03",
        "title" : "Geometry in the Primaries (red yellow blue)",
        "date" : 1983,
        "medium" : "lithograph",
        "dimensions" : "20 x 20",
        "credit" : "",
        "pricenotes" : "",
        "price" : "",
    }],
    "email" : "johngoodyear@comcast.net",
    "website" : "www.johngoodyear.wordpress.com",
    "location" : "Lambertville, NJ"
    },
    {
    "last_name" : "Gross",
    "first_name" : "James",
    "dates" : 1950,
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "gross_james_02",
        "title" : "January, Tower",
        "date" : 2014,
        "medium" : "mixed media",
        "dimensions" : "20 x 16",
        "credit" : "",
        "pricenotes" : "",
        "price" : 1000
    }],
    "email" : "jgross@butlercc.edu",
    "website" : "",
    "location" : "Wichita, KS"
    },
    {
    "last_name" : "Harlow",
    "first_name" : "Lynne",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "harlow_lynne_02",
        "title" : "Taper",
        "date" : 2015,
        "medium" : "acrylic on paper",
        "dimensions" : "11 3/4 x 11 3/4",
        "credit" : "",
        "pricenotes" : "",
        "price" : 800
    }],
    "email" : "lynne@lynneharlow.com",
    "website" : "lynneharlow.com",
    "location" : "Providence, RI"
    },
    {
    "last_name" : "Held",
    "first_name" : "Mara",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Held_Salve.jpeg",
        "title" : "Salve 6",
        "date" : 2014,
        "medium" : "egg tempera on paper",
        "dimensions" : "9 1/2 x 7 3/4",
        "credit" : "",
        "pricenotes" : "",
        "price" : 1200
    },
    {
        "imgsrc" : "Held_Camerata.jpeg",
        "title" : "Camerata 4",
        "date" : 2009,
        "medium" : "graphite and egg tempera on paper",
        "dimensions" : "9 1/2 x 12 1/2",
        "credit" : "",
        "pricenotes" : "",
        "price" : 1200
    }],
    "email" : "mbheld@aol.com",
    "website" : "maraheld.com",
    "location" : "Boiceville, NY"
    },
    {
    "last_name" : "Hill",
    "first_name" : "Daniel",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Hill.jpg",
        "title" : "Wheatstone Bridge 7",
        "date" : 2015,
        "medium" : "thread and polyester film",
        "dimensions" : "10 x 10",
        "credit" : "",
        "pricenotes" : "unframed",
        "price" : 600
    }],
    "email" : "danielghill@mac.com",
    "website" : "danielghill.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Hsiao",
    "first_name" : "Gilbert",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Hsiao.jpg",
        "title" : "A 27",
        "date" : 2011,
        "medium" : "perforated paper, glitter and paper",
        "dimensions" : "10 x 10",
        "credit" : "",
        "pricenotes" : "framed",
        "price" : 400
    }],
    "email" : "hsiao.gilbert@gmail.com",
    "website" : "gilberthsiao.com",
    "location" : "Brooklyn, NY"
    },
    {
    "last_name" : "Ideal",
    "first_name" : "Phillis",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "ideal_phillis_01",
        "title" : "Black and White iPhone Series #1",
        "date" : 2014,
        "medium" : "iPhone drawing /archival ink on paper",
        "dimensions" : "22 x 16",
        "credit" : "",
        "pricenotes" : "",
        "price" : 800
    }],
    "email" : "pideal@earthlink.net",
    "website" : "phillisideal.com",
    "location" : "Santa Fe, NM"
    },
    {
    "last_name" : "Jackson",
    "first_name" : "Julian",
    "dates" : 1953,
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "jackson_julian_02",
        "title" : "Phase 2: 4th quarter",
        "date" : 2015,
        "medium" : "graphite, colored pencil and pasted papers on paper",
        "dimensions" : "22 x 22",
        "credit" : "",
        "pricenotes" : "",
        "price" : 1500
    }],
    "email" : "metaphorart@verizon.net",
    "website" : "julianjacksonstudio.com",
    "location" : "Brooklyn, NY"
    },
    {
    "last_name" : "Juszczyk",
    "first_name" : "James",
    "dates" : 1943,
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "juszczyk_james_02",
        "title" : "Prime7-Y.G.Br.O",
        "date" : 2015,
        "medium" : "acrylic on paper",
        "dimensions" : "16 x 16",
        "credit" : "",
        "pricenotes" : "",
        "price" : 500
    }],
    "email" : "james4j@earthlink.net",
    "website" : "jamesjuszczyk.com",
    "location" : "Bronx, NY"
    },
    {
    "last_name" : "Kahn",
    "first_name" : "Cecily",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "kahn_cecily_04",
        "title" : "Untitled",
        "date" : 2014,
        "medium" : "gouache and collage on paper",
        "dimensions" : "10 x 7",
        "credit" : "",
        "pricenotes" : "",
        "price" : 900
    }],
    "email" : "kahnkapp@yahoo.com",
    "website" : "cecilykahn.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Keller",
    "first_name" : "Marthe",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Keller_Marthe_Wellfleet I.jpg",
        "title" : "Wellfleet I",
        "date" : 1994,
        "medium" : "watercolor and ink on paper",
        "dimensions" : "7 1/4 x 7 3/4",
        "credit" : "",
        "pricenotes" : "",
        "price" : 800
    }],
    "email" : "marthe@keller.com",
    "website" : "marthe.keller.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Kleinhaut",
    "first_name" : "Iona",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "kleinhaut_iona_02",
        "title" : "Untitled",
        "date" : 2014,
        "medium" : "oil and oil stick on paper",
        "dimensions" : "12 x 9",
        "credit" : "",
        "pricenotes" : "",
        "price" : "",
    }],
    "email" : "ionask@aol.com",
    "website" : "ioankleinhaut.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Kord",
    "first_name" : "Victor",
    "dates" : 1935,
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Kord.JPG",
        "title" : "Untitled",
        "date" : 2015,
        "medium" : "mixed media",
        "dimensions" : "8 1/2 x 8 1/2",
        "credit" : "",
        "pricenotes" : "",
        "price" : 500
    }],
    "email" : "victorkord@gmail.com",
    "website" : "",
    "location" : "Brooklyn, NY"
    },
    {
    "last_name" : "Lawrence",
    "first_name" : "Irene",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Lawrence.jpg",
        "title" : "Six Circles Flattened",
        "date" : 2009,
        "medium" : "hard ground and aquatint",
        "dimensions" : "12 1/4 x 18",
        "credit" : "",
        "pricenotes" : "",
        "price" : "NFS"
    }],
    "email" : "lawrenceia@gmail.com",
    "website" : "",
    "location" : "Providence, RI"
    },
    {
    "last_name" : "Logemann",
    "first_name" : "Jane",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "logemann_jane_04",
        "title" : "Spirals",
        "date" : 1999,
        "medium" : "ink, black german etch",
        "dimensions" : "15 1/2 x 15 1/2",
        "credit" : "",
        "pricenotes" : "",
        "price" : 1500
    }],
    "email" : "janelogemann@gmail.com",
    "website" : "janelogemann.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Maine",
    "first_name" : "Stephen",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "maine_stephen_06",
        "title" : "DR15-0399",
        "date" : 2015,
        "medium" : "india ink on paper",
        "dimensions" : "20 1/2 x 18",
        "credit" : "",
        "pricenotes" : "",
        "price" : 1400
    }],
    "email" : "maine.stephen@gmail.com",
    "website" : "stephenmaine.com",
    "location" : "Brooklyn, NY"
    },
    {
    "last_name" : "Mann",
    "first_name" : "Katinka",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "mann_katinka_01",
        "title" : "Of Then",
        "date" : 2008,
        "medium" : "paper relief",
        "dimensions" : "21 x 19 x 12",
        "credit" : "",
        "pricenotes" : "",
        "price" : 2000
    }],
    "email" : "katinkamann330@gmail.com",
    "website" : "katinkamann.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Manter",
    "first_name" : "Nancy",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Manter.jpg",
        "title" : "Cut Back #4",
        "date" : 2015,
        "medium" : "charcoal on paper",
        "dimensions" : "16 x 12",
        "credit" : "",
        "pricenotes" : "",
        "price" : 650
    }],
    "email" : "nmanter@gmail.com",
    "website" : "nancymanter.com",
    "location" : "Brooklyn, NY"
    },
    {
    "last_name" : "Mattera",
    "first_name" : "Joanne",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Mattera.JPG",
        "title" : "Whole Cloth 2",
        "date" : 2015,
        "medium" : "gouache on watercolor paper",
        "dimensions" : "14 1/2 x 14 1/2",
        "credit" : "",
        "pricenotes" : "",
        "price" : 1500
    }],
    "email" : "joannemattera@comcast.net",
    "website" : "joannemattera.blogspot.com",
    "location" : "Salem, MA"
    },
    {
    "last_name" : "Michael",
    "first_name" : "Creighton",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "michael_creighton_05",
        "title" : "ORB 515",
        "date" : 2015,
        "medium" : "paper, acrylic and digital transfer on panel",
        "dimensions" : "diameter: 17 1/4",
        "credit" : "",
        "pricenotes" : "",
        "price" : 3500
    }],
    "email" : "info@creightonmichael.com",
    "website" : "creightonmichael.com",
    "location" : "Mount Kisco, NY"
    },
    {
    "last_name" : "Mohr",
    "first_name" : "Manfred",
    "dates" : 1938,
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "mohr_manfred_1",
        "title" : "p2200_2531",
        "date" : 2015,
        "medium" : "ink on paper",
        "dimensions" : "17 x 17",
        "credit" : "",
        "pricenotes" : "",
        "price" : "NFS"
    }],
    "email" : "manfred@emohr.com",
    "website" : "emohr.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Murray",
    "first_name" : "Judith",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Murray.jpg",
        "title" : "NY #20",
        "date" : 2015,
        "medium" : "oil and acrylic on Strathmore fiberglass paper",
        "dimensions" : "19 1/2 x 21 1/2",
        "credit" : "",
        "pricenotes" : "",
        "price" : 8000
    }],
    "email" : "judmur@earthlink.net",
    "website" : "judithmurray.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Osman",
    "first_name" : "Jim",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "osman_jim_03",
        "title" : "graincircle",
        "date" : 2015,
        "medium" : "ink on paper",
        "dimensions" : "8 3/4 x 8 1/2",
        "credit" : "",
        "pricenotes" : "",
        "price" : 500
    }],
    "email" : "osmanj@newschool.edu",
    "website" : "jimosmanstudio.com",
    "location" : "Brooklyn, NY"
    },
    {
    "last_name" : "Postiglione",
    "first_name" : "Corey",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "postiglione_corey_02",
        "title" : "Tango Interlude #2",
        "date" : 2014,
        "medium" : "acrylic and light-fast marker on paper",
        "dimensions" : "19 1/4 x 15",
        "credit" : "",
        "pricenotes" : "",
        "price" : 500
    }],
    "email" : "cpostiglione@colum.edu",
    "website" : "coreypostiglione.com",
    "location" : "Chicago, IL"
    },
    {
    "last_name" : "Pozzi",
    "first_name" : "Lucio",
    "dates" : 1935,
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "pozzi_lucio_03",
        "title" : "Six Friends",
        "date" : 2015,
        "medium" : "graphite powder on paper",
        "dimensions" : "15 3/4 x 15 3/4",
        "credit" : "",
        "pricenotes" : "",
        "price" : "",
    }],
    "email" : "luciopozzi1@gmail.com",
    "website" : "",
    "location" : "Hudson, NY & Italy"
    },
    {
    "last_name" : "Rabinovich",
    "first_name" : "Raquel",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "TK",
        "title" : "River Library 21",
        "date" : "2003-2005",
        "medium" : "Ganges River mud and glue on Essindia paper",
        "dimensions" : "8 1/2 x 12",
        "credit" : "",
        "pricenotes" : "",
        "price" : 3000
    }],
    "email" : "raquelrabinovich@frontiernet.net",
    "website" : "raquelrabinovich.com",
    "location" : "Rhinebeck, NY"
    },
    {
    "last_name" : "Rockburne",
    "first_name" : "Dorothea",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "TK",
        "title" : "Mirror of the Sky",
        "date" : "1994-1998",
        "medium" : "Lascaux Aquacryl, powdered pigment on gold-leaf ground, on papyrus and hand-made paper, mounted on 100% rag museum board",
        "dimensions" : "17 x 17 1/2",
        "credit" : "",
        "pricenotes" : "",
        "price" : "NFS"
    }],
    "email" : "drockburne@gmail.com",
    "website" : "",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Roser",
    "first_name" : "Ce",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Roser.jpg",
        "title" : "Earth Span",
        "date" : 2014,
        "medium" : "watercolor and ink on paper",
        "dimensions" : "14 x 10",
        "credit" : "",
        "pricenotes" : "",
        "price" : 1800
    }],
    "email" : "Nina Katan: neonaquamadoore@gmail.com",
    "website" : "",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Row",
    "first_name" : "David",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "row_david_02",
        "title" : "10 to a Dozen",
        "date" : 2015,
        "medium" : "charcoal on paper",
        "dimensions" : "23 3/4 x 22 1/2",
        "credit" : "",
        "pricenotes" : "",
        "price" : 4000
    }],
    "email" : "drow@nyc.rr.com",
    "website" : "davidrow.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Russinof",
    "first_name" : "Anne",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Russinof.jpg",
        "title" : "Vault 9",
        "date" : 2015,
        "medium" : "sumi ink and gesso on paper",
        "dimensions" : "16 1/2 x 12",
        "credit" : "",
        "pricenotes" : "",
        "price" : 600
    }],
    "email" : "annier@annerussinof.com",
    "website" : "annerussinof.com",
    "location" : "Brooklyn, NY"
    },
    {
    "last_name" : "Sannai",
    "first_name" : "Lorenza",
    "dates" : 1969,
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Sannai.jpg",
        "title" : "Innesti",
        "date" : 2015,
        "medium" : "marker on paper",
        "dimensions" : "15 3/4 x 15 3/4",
        "credit" : "",
        "pricenotes" : "",
        "price" : "",
    }],
    "email" : "sannai.lorenza@virgilio.it",
    "website" : "lorenzasannai.com",
    "location" : "Hudson, NY & Italy"
    },
    {
    "last_name" : "Schiliro",
    "first_name" : "Mary",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Schiliro.jpg",
        "title" : "Thrown for a Loop 1",
        "date" : 2015,
        "medium" : "graphite on denril",
        "dimensions" : "9 x 12",
        "credit" : "",
        "pricenotes" : "framed",
        "price" : 400
    }],
    "email" : "maryschiliro@gmail.com",
    "website" : "maryschiliro.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Seawright & Mimi Garrard",
    "first_name" : "James",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Seawright.jpg",
        "title" : "Circle #1",
        "date" : 2015,
        "medium" : "digital print",
        "dimensions" : "14 x 14",
        "credit" : "",
        "pricenotes" : "",
        "price" : 910
    }],
    "email" : "jims@princeton.edu",
    "website" : "james.seawright.net",
    "location" : "Middletown, NY"
    },
    {
    "last_name" : "Seidl",
    "first_name" : "Claire",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Seidl.tiff",
        "title" : "Propeller 4",
        "date" : 2013,
        "medium" : "silver gelatin photograph",
        "dimensions" : "15 x 15",
        "credit" : "",
        "pricenotes" : "",
        "price" : 1400
    }],
    "email" : "claireseidl@earthlink.net",
    "website" : "claireseidl.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Shalala",
    "first_name" : "Edward",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Shalala.jpg",
        "title" : "untitled:\\nLocation: North Meadow, Central Park, NY, NY",
        "date" : 2014,
        "medium" : "#10 raw canvas thread, random permutation blown by the wind, documentary photograph, gelatin silver print",
        "dimensions" : "8 x 10",
        "credit" : "",
        "pricenotes" : "",
        "price" : 300
    }],
    "email" : "e.shalala@earthlink.net",
    "website" : "edwardshalala.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Smith",
    "first_name" : "Susan",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Smith.tiff",
        "title" : "Circles and Squares",
        "date" : 2013,
        "medium" : "collage and acrylic on rice paper",
        "dimensions" : "21 x 23",
        "credit" : "",
        "pricenotes" : "",
        "price" : 1000
    }],
    "email" : "ssmithpainter@icloud.com",
    "website" : "susansmithpainter.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Trincere",
    "first_name" : "Li",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "trincere_li_04",
        "title" : "Untitled",
        "date" : 2014,
        "medium" : "wax on paper",
        "dimensions" : "22 x 30",
        "credit" : "",
        "pricenotes" : "",
        "price" : "",
    }],
    "email" : "trincere@icloud.com",
    "website" : "",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Uchiyama",
    "first_name" : "Kim",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Uchiyama.tif",
        "title" : "Shift 4",
        "date" : 2014,
        "medium" : "watercolor on Arches paper",
        "dimensions" : "16 x 12",
        "credit" : "Courtesy of Annette and David Fox",
        "pricenotes" : "",
        "price" : "NFS"
    }],
    "email" : "kim.uchiyama@gmail.com",
    "website" : "kimuchiyama.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Umlauf",
    "first_name" : "Lynn",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Umlauf_1.jpg",
        "title" : "August 20, 1997",
        "date" : 1997,
        "medium" : "ink, acrylic and pastel on paper",
        "dimensions" : "19 x 19 1/2",
        "credit" : "",
        "pricenotes" : "",
        "price" : 2000
    },
    {
        "imgsrc" : "Umlauf_2.jpg",
        "title" : "East Hampton",
        "date" : 2015,
        "medium" : "acrylic, oil, pastel and charcoal on paper",
        "dimensions" : "11 x 13 3/4",
        "credit" : "",
        "pricenotes" : "",
        "price" : 1000
    }],
    "email" : "lynnumlauf@gmail.com",
    "website" : "lynnumlauf.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Vail",
    "first_name" : "Clover",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "vail_clover_03",
        "title" : "Untitled",
        "date" : 2014,
        "medium" : "ball point pen on wood panel",
        "dimensions" : "6 x 4",
        "credit" : "",
        "pricenotes" : "",
        "price" : 750
    }],
    "email" : "clovervail@gmail.com",
    "website" : "clovervail.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Vasek",
    "first_name" : "Vera",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Vasek.jpeg",
        "title" : "March 3, 2007",
        "date" : 2015,
        "medium" : "cast paper, sand, acrylic, glass fiber",
        "dimensions" : "25 x 25 x 2",
        "credit" : "",
        "pricenotes" : "",
        "price" : 2000
    }],
    "email" : "vera@veravasek.com",
    "website" : "veravasek.com",
    "location" : "Key West, FL"
    },
    {
    "last_name" : "Wilkinson",
    "first_name" : "Jeanne",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Wilkinson_Blue_Reverbs.jpeg",
        "title" : "Blue Reverbs",
        "date" : "2000-2015",
        "medium" : "ink, watercolor, colored pencil and graphite on paper",
        "dimensions" : "6 x 5",
        "credit" : "",
        "pricenotes" : "",
        "price" : 500
    },
    {
        "imgsrc" : "Wilkinson_Yellow_Loop.jpeg",
        "title" : "Yellow Loop",
        "date" : "2000-2015",
        "medium" : "ink, watercolor, colored pencil and graphite on paper",
        "dimensions" : "8 x 7",
        "credit" : "",
        "pricenotes" : "",
        "price" : 500
    }],
    "email" : "jeannewilkinson@gmail.com",
    "website" : "jeannewilkinson.com",
    "location" : "Brooklyn, NY"
    },
    {
    "last_name" : "Williams",
    "first_name" : "Mark",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Williams.jpg",
        "title" : "Turned Circles #3",
        "date" : 2015,
        "medium" : "oil on synthetic paper",
        "dimensions" : "24 x 20",
        "credit" : "",
        "pricenotes" : "",
        "price" : 3500
    }],
    "email" : "markwilliamsstudio@gmail.com",
    "website" : "markwilliamsartist.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Zapkus",
    "first_name" : "Kes",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "Zapkus.JPG",
        "title" : "White - Green Meander",
        "date" : 1999,
        "medium" : "acrylic, pencil, crayon and Xerox transfer on paper",
        "dimensions" : "8 3/4 x 14 1/2",
        "credit" : "",
        "pricenotes" : "",
        "price" : 4500
    }],
    "email" : "keszapkus@gmail.com",
    "website" : "keszapkus.com",
    "location" : "New York, NY"
    },
    {
    "last_name" : "Zirin",
    "first_name" : "Nola",
    "dates" : "",
    "birthplace" : "",
    "artworks": [{
        "imgsrc" : "zirin_nola_05",
        "title" : "Marking",
        "date" : 2014,
        "medium" : "mixed media on paper",
        "dimensions" : "23 x 22",
        "credit" : "",
        "pricenotes" : "",
        "price" : "NFS"
    }],
    "email" : "nolazirin@verizon.net",
    "website" : "nolazirin.com",
    "location" : "Syosset, NY"
    }
]
});
