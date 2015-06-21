var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'homeCtrl'
    })
    .when('/posts', {
      template: '<h1>Posts for my site</h1>'
    })
});

app.controller('homeCtrl', function ($scope) {
  console.log('HomeCtrl');
  $scope.model = {
    message: 'This is my beautifull homepage'
  }
});
