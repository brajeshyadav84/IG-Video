IG.controller('playController', function($sce, $scope, $rootScope, $state, $stateParams) {
    console.log("$stateParams");console.log($stateParams);
    var ID = $stateParams.ID;
    $rootScope.title = $stateParams.Name;
    $rootScope.back = "backShow";
    
    
    $scope.videoID = ID;
    
    $scope.btnSendQuery= function(IGData) {
        if (!!IGData.Question) {
            if(window.plugins && window.plugins.emailComposer) {
                window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
                    console.log("Response -> " + result);
                }, 
                "Regarding: Technical Support", // Subject
                IGData.Question,                      // Body
                ["brajesh.mymailbox@gmail.com","techsupport@interviewgully.com"],    // To
                null,                    // CC
                null,                    // BCC
                false,                   // isHTML
                null,                    // Attachments
                null);                   // Attachment Data
            }
        }
    }

    $scope.btnCancel= function(IGData) {
    	//IGData.EmailID = "";
    	IGData.Question = "";
    }

});
