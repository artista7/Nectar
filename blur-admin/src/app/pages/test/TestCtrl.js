/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.test')
      .controller('TestCtrl', TestCtrl);

  /** @ngInject */
  function TestCtrl($scope, $http, comparisonData) {
    $scope.comparisonData = comparisonData;
  }
})();