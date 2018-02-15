/**
 * @author Shanty
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.main')
      .controller('coinListCtrl', CoinListCtrl);

  /** @ngInject */
  function CoinListCtrl($scope, $rootScope, $filter, editableOptions, editableThemes, coinMarketData, comparisonData) {
    $rootScope.coinMarketData = coinMarketData;
    $rootScope.comparisonData = comparisonData;
    //formdata class - ECMA6 specs
    // class formData{
    //   constructor (coinMarketData, smartTablePageSize, selectedCurrency){
    //     this.coinMarketData=coinMarketData;
    //   this.smartTablePageSize=smartTablePageSize;
    //   //this.selectedCurrency=selectedCurrency;
    //   }
    // }

    function formData(coinMarketData, smartTablePageSize, selectedCurrency){
      this.coinMarketData=coinMarketData;
      this.smartTablePageSize=smartTablePageSize;
      //this.selectedCurrency=selectedCurrency;
    }
    $scope.currencies = ['Dollar', 'EUR', 'INR'];
    $scope.formData = new formData(coinMarketData, 25);//, $scope.currencies[0]);
    
    $scope.dataColor = function(value){
      if(value<0){
        return {"color":"brown"};
      }
      else return {"color":"green"};
    }
  }
})();
