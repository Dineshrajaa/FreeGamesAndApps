angular.module('starter.controllers', [])
.controller('tabsCtrl',function($scope,$ionicSideMenuDelegate){
   $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
})
.controller('contactCtrl', function($scope) {
    /* Page varables */
    $scope.profile = {};
    $scope.profile.title = 'Free Games and Apps Ltd.';
    $scope.profile.subtitle = 'Quality product for all';
    $scope.profile.phone = '07786324603';
    $scope.profile.email = 'bhatiar2003@yahoo.co.uk';
    $scope.profile.website = 'http://www.numsiii.com';
    $scope.profile.description = 'We make quality mobile apps and games for out clients and users';

})

.controller('infoCtrl', function($scope) {

})

.controller('achievementCtrl', function($scope) {

})

.controller('moreCtrl', function($scope) {

})

.controller('videosCtrl', function($scope) {

})

.controller('contactformCtrl', function($scope) {

})








