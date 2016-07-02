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