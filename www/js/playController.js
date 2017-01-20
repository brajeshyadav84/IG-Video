IG.controller('playController', function($sce, $scope, $rootScope, $state, $stateParams) {
    console.log("$stateParams");console.log($stateParams);
    var ID = $stateParams.ID;
    $rootScope.title = $stateParams.Name;
    $rootScope.back = "backShow";
    
    
    $scope.videoID = ID;
    
    $scope.btnSendQuery= function() {
        if(window.plugins && window.plugins.emailComposer) {
            window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
                console.log("Response -> " + result);
            }, 
            "Question from IG App", // Subject
            $scope.Question,                      // Body
            ["brajesh.mymailbox@gmail.com"],    // To
            $scope.EmailID,                    // CC
            null,                    // BCC
            false,                   // isHTML
            null,                    // Attachments
            null);                   // Attachment Data
        }
    }

    $scope.btnCancel= function() {
    	$scope.EmailID = "";
    	$scope.Question = "";
    }

});
