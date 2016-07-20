// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var IG = angular.module('starter', ['ionic'])

IG.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

IG.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $sceDelegateProvider) {
  $ionicConfigProvider.backButton.previousTitleText(true).text('Back');
  $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);  
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('home', {
    url: '/home',
    templateUrl: 'screens/home.html',
    controller: "homeController"
   })
  
  .state('details', {
    url: '/details/:ID/:Name',
    templateUrl: 'screens/details.html',
    controller: "detailsController"
   })
  
  .state('contact', {
    url: '/contact',
    templateUrl: 'screens/contactUs.html',
    controller: "contactController"
   })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
