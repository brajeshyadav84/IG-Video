IG.controller('indexController', function($scope, $ionicHistory, $rootScope, $state, $stateParams,$ionicHistory, $location) {
    console.log("index");
    $rootScope.title = "InterviewGully";
    $rootScope.back = "backHide";
    
    $scope.myGoBack = function() {
        //console.dir($location.path());
        $rootScope.title = "InterviewGully";
        $rootScope.back = "backHide";
        $ionicHistory.goBack();
    };
});