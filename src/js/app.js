var app = angular.module('MaintainApp', [
  'ngRoute',
  'mobile-angular-ui',
  'MaintainApp.controllers.Main',
  'MaintainApp.controllers.browse',
])

app.config(function($routeProvider) {
  $routeProvider
.when('/home', {templateUrl:'home.html', reloadOnSearch: false})
.when('/browse',{ templateUrl:'browse.html' , reloadOnSearch: false})
.when('/parts',{ templateUrl:'parts.html' , reloadOnSearch: false})
.otherwise({redirectTo: '/home'})

});
