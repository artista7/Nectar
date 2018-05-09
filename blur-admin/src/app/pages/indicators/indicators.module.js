/**
 * @author Shanty
 * created on 16.12.2015
 */
(function () {
    'use strict';
    
    angular.module('BlurAdmin.pages.indicators', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('indicator', {
            url: '/indicators',
            templateUrl: 'app/pages/indicators/indicators.html',
            title: 'Indicator',
            controller: 'IndicatorsCtrl',
            resolve: {
                macdData: function(IndicatorsService) {
                return IndicatorsService.getMacdData();
                }
            },
            sidebarMeta: {
              icon: 'ion-flag',
              order: 3,
            },
          });
    }
  })();
  