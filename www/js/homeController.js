IG.controller('homeController', function($scope, $state, $stateParams) {
    console.log("home");
    $scope.isShow = {
        "display" : "none"
    }
    $scope.isClickPromote = false;
    
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
        $scope.isShow = {
            "display" : "none"
        }
        $scope.isClickPromote = false;
    };
    
    $scope.onClickShare = function (){
        
    };
    
    $scope.onClickContact = function (){
        $state.go("contact");
    };
    
});
