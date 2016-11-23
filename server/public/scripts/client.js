var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/kilgore' ,{
      templateUrl: '/views/templates/kilgore.html',
      controller: 'KilgoreController',
      controllerAs: 'potato'
    })
    .when('/birdperson' ,{
      templateUrl: '/views/templates/birdperson.html',
      controller: 'BirdController',
      controllerAs: 'birdperson'
    })
    .when('/phil' ,{
      templateUrl: '/views/templates/phil.html',
      controller: 'PhilController',
      controllerAs: 'phil'
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);

app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.message = "Home controller is the best!";

});

app.controller('KilgoreController', function() {
  console.log('kilgore controller running');
  var self = this;
  self.message = "Kilgore controller is the best!";

});

app.controller('PhilController', function() {
  console.log('phil controller running');
  var self = this;

});
app.controller('BirdController', function() {
  console.log('bird controller running');
  var self = this;

});
