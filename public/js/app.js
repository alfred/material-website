'use strict'

var app = angular.module('alfredMaterial', ['ngMaterial', 'ngRoute', 'ngLoadScript']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('blue')
  .accentPalette('amber');
});

app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/home.html',
      title: 'Home'
    })
    .when('/code', {
      templateUrl: '/views/projects/projects.html',
      title: 'Code'
    })
    .when('/comics', {
      templateUrl: '/views/library/library.html',
      title: 'Comics'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log) {

  $scope.$on('$routeChangeSuccess', function (event, data) {
    $scope.pageTitle = data.title;
  });
 
  $scope.hobbies = [{
    name: "Longboarder",
    desc: "I learned to ride about a year ago, and it might have been one of the" +
          "  best things I\'ve done in awhile. Its a really fun way to get" +
          " around and an even better way to stay active. I also managed to" +
          " design and paint my own decal onto my board!"
  },{
    name: "Comic Reader",
    desc: "I\'m a huge DC comics fan. I can appreciate the amount of work that goes" + 
          " into building not only a universe, but a multiverse. There are so many moving parts to factor in" +
          " and its amazing to see how authors can stick to canon, but also continue to innovate " +
          "the story and present their fans with new ideas every issue.",
    link: "#comics"
  },{
    name: "Developer",
    desc: "I\'m a full-stack web developer. Javascript is my weapon of choice. " +
          "I started off building apps with Ruby on Rails and have moved on to" +
          "really enjoying Node and Express. What you\'re looking at right now was actually built with " +
          "Node and Express, and a generous amount of Angular. Check out my other work here",
    link: ""
  }];

  $scope.contactInfos = [{
    id: 'btn-twitter',
    label: 'TWITTER',
    url: 'https://twitter.com/alfredabab_io'
  }, {
    id: 'btn-github',
    label: 'GITHUB',
    url: 'https://github.com/alfred'
  }, {
    id: 'btn-linkedin',
    label: 'LINKEDIN',
    url: 'https://www.linkedin.com/in/alfredababio/en'
  }, {
    id: 'btn-email',
    label: 'EMAIL',
    url: ''
  }];

  $scope.navLinks = [{
    name: 'Home',
    url: '/',
    icon: ''
  },{
    name: 'Code',
    url: 'code',
    icon: ''
  }, {
    name: 'Comics',
    url: 'comics',
    icon: ''
  }, {
    name: 'Resume',
    url: 'resume',
    icon: ''
  }];

  $scope.aboutText = {          
    intro: "Hi, I\'m Alfred.",     
    body: "I like to do dope things. I try to "
  };  

  $scope.toggleSideMenu = function() {
    $mdSidenav('sideNav').toggle()
    .then(function(){
      if ($mdSidenav('sideNav').isOpen()) {
        var backdropElement = document.getElementsByClassName('md-sidenav-backdrop');
        if(backdropElement) {
          backdropElement[0].addEventListener('click', function() {
            animateToMenu();
          });
        }
      }
    });
  };

});
