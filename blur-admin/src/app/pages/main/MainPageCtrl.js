/**
 * @author Shanty
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.main')
      .controller('MainPageCtrl', MainPageCtrl);

  /** @ngInject */
  function MainPageCtrl($scope, $rootScope, $filter, editableOptions, editableThemes, coinMarketData) {
    //$rootScope.coinMarketData = coinMarketData;
  }
})();
