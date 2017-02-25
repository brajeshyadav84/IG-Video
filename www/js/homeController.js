IG.controller('homeController', function($scope, $http, $rootScope, $state, $stateParams, IGService, $cordovaSocialSharing, $ionicPopup) {
    console.log("home");
    $rootScope.title = "InterviewGully";
    $rootScope.back = "backHide";
    $scope.isShowModal = false;

    var request = {
        
    };
    
    var url = "http://www.interviewgully.com/API/IG_Video/list.json";
    IGService.postAPI(request, url).then( function(response){
        console.log("home response");
        $scope.listData = response.data[0].videos;
        $scope.ebookData = response.data[0].ebooks;
        console.log($scope.listData);
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
            if(id.indexOf("2.0") < 0){
                console.log('Loading android upgrade screen');
                $scope.showConfirm(data.androidSettings.itunesurl);
            }
        } else {
            var id = data.iosSettings.versions[0];
            if(id.indexOf("2.0") < 0){
                console.log('Loading ios upgrade screen');
                $scope.showConfirm(data.iosSettings.itunesurl);
            }
        }

        $scope.isShowModal = data.isShowModal;
        $scope.modalTitle = data.modalTitle;
        $scope.modalDesc = data.modalDesc;
        
    },function(error){
        console.log(error);
    });

    $scope.onClickCloseModal = function (){
        $scope.isShowModal = false;
    };


    $scope.showConfirm = function(storeURL) {
           var confirmPopup = $ionicPopup.confirm({
             title: 'App Upgrade',
             template: 'Are you want to upgrade app to avail new features?'
           });

           confirmPopup.then(function(res) {
             if(res) {
               window.open(storeURL, "_system");
             } else {
               console.log('You are not sure');
             }
           });
     };

    // end force upgrade Implememntation
    
    $scope.reset = function () {
        $scope.isShow = {
            "display" : "none"
        };
        $scope.isClickPromote = false;
    };
    
    $scope.onClickTutorial = function (id,Name,isEmailAvailable) {
        $rootScope.isEmailAvailable = isEmailAvailable;
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
    
    $scope.onClickShare = function (eURL){
        $scope.reset ();
        if(eURL == "friends")
            $cordovaSocialSharing.share('Learn, Share & Suggest - ', 'InterviewGully', null, 'http://www.interviewgully.com/API/appLauncher.html');
        else
            $cordovaSocialSharing.share('Learn, Share & Suggest - ', 'InterviewGully', null, eURL);
    };

    $scope.onClickOpen = function (eURL){
        $scope.reset ();
        window.open(eURL, '_system');
    };

    $scope.onClickForum = function (){
        $scope.reset ();
        window.open('http://www.interviewgully.com/forum', '_system');
    };
    
    $scope.onClickContact = function (){
        $scope.reset ();
        $state.go("contact");
    };
    
    $scope.reset();
    
});
