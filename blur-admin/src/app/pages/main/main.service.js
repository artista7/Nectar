/**
 * @author Shanty
 * created on 16.12.2015
 */
(function () {
  'use strict';
  
  angular.module('BlurAdmin.pages.main').service('MarketCapService', function($http, $q) {
    var cryptoData = undefined;
    var service = {
      // getTop10Crypto: function() {
      //   return $http.get('https://api.coinmarketcap.com/v1/ticker/?limit=10', { cache: true }).then(function(resp) {
      //     return resp.data;
      //   });
      // },
      
      getCrypto: function(){
        if(!cryptoData){
          var deferred = $q.defer();
          $http.get('https://localhost/api/coinmarketdata', { cache: true }).then(function(resp) {
          //$http.get('https://api.coinmarketcap.com/v1/ticker/', { cache: true }).then(function(resp) {
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

  angular.module('BlurAdmin.pages.main').service('ComparisonService', function($http, $q) {
    var cryptoData = undefined;
    var service = {
        getComparisonData: function(){
            if(!cryptoData){
                var deferred = $q.defer();
                $http.get('https://localhost/api/comparison', { cache: true }).then(function(resp) {
                //$http.get('https://api.coinmarketcap.com/v1/ticker/', { cache: true }).then(function(resp) {
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
})();