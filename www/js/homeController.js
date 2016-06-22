angular.module('starter.controllers', [])

.controller('homeController', function($scope, $state, $stateParams) {
    console.log("home");
    
    $scope.onClickTutorial = function () {
        //$state.go("details");
    }
});
