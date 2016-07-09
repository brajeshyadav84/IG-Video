IG.controller('detailsController', function($sce, $scope, $http, $rootScope, $state, $stateParams, IGService) {
    console.log("$stateParams");console.log($stateParams);
    var ID = $stateParams.ID;
    $rootScope.title = "InterviewGully Details";
    
    var request = {
        
    };
    
    var url = "http://www.interviewgully.com/API/IG_Video/details.json";
    IGService.postAPI(request, url).then( function(response){
        console.log("details response");
        $scope.DetailData = response.data[0][ID];console.log($scope.DetailData);
    },function(error){
        console.log(error);
    });
    
    $scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src);
	}
    
});


