IG.controller('homeController', function($scope, $state, $stateParams) {
    console.log("home");
    $scope.isShow = "none";
    
    $scope.onClickTutorial = function () {
        $state.go("details");
    };
    
    $scope.onClickPromote = function (){
        $scope.isShow = "block";
    };
    
    $scope.onClickShare = function (){
        
    };
    
    $scope.onClickContact = function (){
        $state.go("contact");
    };
    
});
