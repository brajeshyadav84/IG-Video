IG.service('IGService',function($http, $q, $ionicLoading, $timeout) {
    return {
        postAPI: function (request, url) {
                var deferred = $q.defer();
                $ionicLoading.show({template: 'Loading...'});
                console.log(url);console.log(request);
                return $http.get(url)
                    .success(function (response) {
                        $ionicLoading.hide();
                        deferred.resolve(response);
                    })
                    .error(function (error) {
                        $ionicLoading.hide();
                        deferred.reject(error);
                    });
                return deferred.promise;
        }
    }
});

IG.filter('thumbNameDisplay', function(){
    return function (input){
        console.log(input);
        var result = input.charAt(0).toUpperCase();
        return result;
    }
})