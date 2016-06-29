IG.controller('indexController', function($scope, $ionicHistory, $rootScope, $state, $stateParams) {
    console.log("index");
    $rootScope.title = "InterviewGully";
    
    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };
});