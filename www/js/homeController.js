IG.controller('homeController', function($scope, $http, $rootScope, $state, $stateParams, IGService, $cordovaSocialSharing) {
    console.log("home");
    $rootScope.title = "InterviewGully";
    $rootScope.back = "backHide";
    
    var request = {
        
    };
    
    var url = "http://www.interviewgully.com/API/IG_Video/list.json";
    IGService.postAPI(request, url).then( function(response){
        console.log("home response");
        $scope.listData = response.data;console.log($scope.listData);
    },function(error){
        console.log(error);
    });

    // start force upgrade Implememntation

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var isIOS = (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i));
    var isAndroid = (userAgent.match(/Android/i));
    var isDesktop = !(isIOS || isAndroid);

    var forceurl = "http://www.interviewgully.com/API/IG_Video/IGUpgrade.json";
    IGService.postAPI(request, forceurl).then( function(response){
        var data = response.data;
        if(!!isAndroid){
            var id = data.androidSettings.versions[0];
            if(id != "2.0"){
                alert('Loading android upgrade screen');
            }
        } else {
            var id = data.iosSettings.versions[0];
            if(id != "2.0"){
                console.log('Loading ios upgrade screen');
            }
        }
        
    },function(error){
        console.log(error);
    });
    // end force upgrade Implememntation
    
    $scope.reset = function () {
        $scope.isShow = {
            "display" : "none"
        };
        $scope.isClickPromote = false;
    };
    
    $scope.onClickTutorial = function (id,Name) {
        $state.go("details", {"ID": id,"Name":Name});
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
        $cordovaSocialSharing.share('Hi!, It is nice app for Software Developers', 'InterviewGully', null, 'http://www.interviewgully.com/API/appLauncher.html');
    };
    
    $scope.onClickContact = function (){
        $scope.reset ();
        $state.go("contact");
    };
    
    $scope.reset();
    
});
