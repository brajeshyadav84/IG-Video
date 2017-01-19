IG.controller('playController', function($sce, $scope, $rootScope, $state, $stateParams) {
    console.log("$stateParams");console.log($stateParams);
    var ID = $stateParams.ID;
    $rootScope.title = $stateParams.Name;
    $rootScope.back = "backShow";
    
    
    $scope.videoID = ID;
    
    
});
