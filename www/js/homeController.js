IG.controller('homeController', function($scope, $rootScope, $state, $stateParams, $http) {
    console.log("home");
    $rootScope.title = "InterviewGully";
    
//    $http.get('https://www.reddit.com/r/gifs/top/.json?limit=2&sort=hot').map(res => res.json()).subscribe(data => {
//        console.log(data.data.children);
//    });
    
//    $http({
//      method: 'GET',
//      url: 'https://www.reddit.com/r/gifs/top/.json?limit=2&sort=hot'
//    }).then(function successCallback(response) {
//        // this callback will be called asynchronously
//        // when the response is available
//        console.log(response);
//      }, function errorCallback(error) {
//        // called asynchronously if an error occurs
//        // or server returns response with an error status.
//        console.log(error);
//    });
    
    $scope.reset = function () {
        $scope.isShow = {
            "display" : "none"
        };
        $scope.isClickPromote = false;
    };
    
    $scope.onClickTutorial = function () {
        $state.go("details");
    };
    
    $scope.onClickPromote = function (){
        $scope.isShow = {
            "display" : "block"
        }
        $scope.isClickPromote = true;
    };
    
    $scope.onClickPromoteClose = function () {
        $scope.reset ();
    };
    
    $scope.onClickShare = function (){
        $scope.reset ();
    };
    
    $scope.onClickContact = function (){
        $scope.reset ();
        $state.go("contact");
    };
    
    $scope.reset();
    
});
