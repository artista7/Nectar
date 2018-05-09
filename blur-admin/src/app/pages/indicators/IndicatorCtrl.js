(function () {
  'use strict';

  angular.module('BlurAdmin.pages.indicators')
    .controller('IndicatorsCtrl', IndicatorsCtrl)

  function IndicatorsCtrl($scope, macdData) {
    //scope variables
    $scope.macdData=macdData
    // $scope.init = function(){
    //   getMacdData();
    // }
    // //initializer function
    // $scope.init();
    //scope functions
    $scope.dataColor = function(value){
      if(value<0){
        return {"color":"brown"};
      }
      else return {"color":"green"};
    }
    //private variables
      // function getMacdData(){
      //   var data =IndicatorsService.getMacdData();
      //   $scope.macdData=data;
      // }
  }
})()