// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $ionicConfigProvider.tabs.position('bottom'); // other values: top
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html',
        controller:'tabsCtrl'
    })

    // Each tab has its own nav history stack:

    .state('tab.contact', {
        url: '/contact',
        views: {
            'tab-contact': {
                templateUrl: 'templates/tab-contact.html',
                controller: 'contactCtrl'
            }
        }
    })

    .state('tab.info', {
            url: '/info',
            views: {
                'tab-info': {
                    templateUrl: 'templates/tab-info.html',
                    controller: 'infoCtrl'
                }
            }
        })


    .state('tab.achievements', {
        url: '/achievements',
        views: {
            'tab-achievements': {
                templateUrl: 'templates/tab-achievements.html',
                controller: 'achievementCtrl'
            }
        }
    })

    .state('tab.videos', {
        url: '/videos',
        views: {
            'tab-videos': {
                templateUrl: 'templates/tab-videos.html',
                controller: 'videosCtrl'
            }
        }
    })

    .state('tab.more', {
        url: '/more',
        views: {
            'tab-more': {
                templateUrl: 'templates/tab-more.html',
                controller: 'moreCtrl'
            }
        }
    })
    /*.state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/index.html",
      controller: 'appCtrl'
    })*/
    .state('tab.contactform', {
        url: '/contactform',
        views: {
            'tab-contactform': {
                templateUrl: 'templates/tab-contactform.html',
                controller: 'contactformCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/contact');

});
