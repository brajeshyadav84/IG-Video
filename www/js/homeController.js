IG.controller('homeController', function($scope, $http, $rootScope, $state, $stateParams, IGService) {
    console.log("home");
    $rootScope.title = "InterviewGully";
    
    var request = {
        
    };
    
    var url = "http://www.interviewgully.com/API/IG_Video/list.json";
    IGService.postAPI(request, url).then( function(response){
        console.log("home response");console.log(response);
    },function(error){
        console.log(error);
    });
    
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
