(function(){
    'use strict';

    angular.module('BlurAdmin.pages.indicators').service('IndicatorsService', function($http, $q, ENV_VARS) {
        var macdData = undefined;
        var service = {
            getMacdData: function(){
                if(!macdData){
                    var deferred = $q.defer();
                    $http.get(ENV_VARS.macdAPI, { cache: true }).then(function(resp) {
                        macdData =  resp.data;
                        deferred.resolve(macdData);
                    }, function(error) {
                        macdData =  error;
                    deferred.reject(error);
                    });
                macdData = deferred.promise;
                }
            return $q.when(macdData);
            },
        }   
        return service;
      });
})()