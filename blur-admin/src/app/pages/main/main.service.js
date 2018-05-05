/**
 * @author Shanty
 * created on 16.12.2015
 */
(function () {
  'use strict';
  
  angular.module('BlurAdmin.pages.main').service('ComparisonService', function($http, $q, ENV_VARS) {
    var cryptoData = undefined;
    var service = {
        getComparisonData: function(){
            if(!cryptoData){
                var deferred = $q.defer();
                $http.get(ENV_VARS.comparisonAPI, { cache: true }).then(function(resp) {
                    cryptoData =  resp.data;
                    deferred.resolve(cryptoData);
                }, function(error) {
                cryptoData =  error;
                deferred.reject(error);
                });
            cryptoData = deferred.promise;
            }
        return $q.when(cryptoData);
        },
    }   
    return service;
  });

  angular.module('BlurAdmin.pages.main').service('MarketCapService', function($http, $q, ENV_VARS) {
    var cryptoData = undefined;
    var service = {
      
      getCrypto: function(){
        if(!cryptoData){
          var deferred = $q.defer();
          $http.get(ENV_VARS.coinMarketDataAPI, { cache: true }).then(function(resp) {
              cryptoData =  resp.data;
              deferred.resolve(cryptoData);
          }, function(error) {
            cryptoData =  error;
            deferred.reject(error);
          });
          cryptoData = deferred.promise;
        }
      return $q.when(cryptoData);
      },
    }
    
    return service;
  })
})();