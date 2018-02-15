/**
 * @author a.demeshko
 * created on 3/1/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .service('preloader', preloader);

  /** @ngInject */
  function preloader($q, $http) {
    return {
      loadImg: function (src) {
        var d = $q.defer();
        var img = new Image();
        img.src = src;
        img.onload = function(){
          d.resolve();
        };
        return d.promise;
      },
      loadAmCharts : function(){
        var d = $q.defer();
        AmCharts.ready(function(){
          d.resolve();
        });
        return d.promise;
      },
      coinDataLoad : function(){
        var cryptoData = undefined;
        var getCoinMarketData = function(){
          if(!cryptoData){
            var deferred = $q.defer();
            $http.get('https://api.coinmarketcap.com/v1/ticker/', { cache: true }).then(function(resp) {
                cryptoData =  resp.data;
                deferred.resolve(cryptoData);
            }, function(error) {
              cryptoData =  error;
              deferred.reject(error);
            });
            cryptoData = deferred.promise;
          }
        return $q.when(cryptoData);
        };
        getCoinMarketData();
      },
    }
  }

})();