IG.controller('contactController', function($scope, $rootScope, $state, $stateParams) {
    console.log("contact");
    $rootScope.title = "Contact Us";
    $rootScope.back = "backShow";

    $scope.btnQuery= function(Subject, emailID) {
        if(window.plugins && window.plugins.emailComposer) {
            window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
                console.log("Response -> " + result);
            }, 
            Subject, // Subject
            null,                      // Body
            [emailID],    // To
            null,                    // CC
            null,                    // BCC
            false,                   // isHTML
            null,                    // Attachments
            null);                   // Attachment Data
        }
    }
    
});