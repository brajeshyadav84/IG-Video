IG.controller('notificationController', function($scope, $ionicHistory, $rootScope, $state, $stateParams,$ionicHistory, $location) {
    console.log("index");
    $rootScope.title = "Notifications";
    $rootScope.back = "backShow";


    $scope.chats = {
        name:"title",
        desc:"Descriptions"
    }
    
    $scope.myGoBack = function() {
        $ionicHistory.goBack();
        console.dir($rootScope.back);console.log($location.$$absUrl);console.log(window.location.hash)
        if((window.location.hash.split('/')[1] == 'details') || (window.location.hash.split('/')[1] == 'contact')) {
            $rootScope.title = "InterviewGully";
            $rootScope.back = "backHide";
        }

    };
});