IG.controller('indexController', function($scope, $ionicHistory, $rootScope, $state, $stateParams,$ionicHistory, $location) {
    console.log("index");
    $rootScope.title = "InterviewGully";
    $rootScope.back = "backHide";
    
    $scope.myGoBack = function() {
        $ionicHistory.goBack();
        console.dir($rootScope.back);console.log($location.$$absUrl);console.log(window.location.hash)
        if((window.location.hash.split('/')[1] == 'details') || (window.location.hash.split('/')[1] == 'contact') || (window.location.hash.split('/')[1] == 'notification')) {
            $rootScope.title = "InterviewGully";
            $rootScope.back = "backHide";
        }

    };

    $scope.myNotification = function() {
        $state.go("notification");
    }
});