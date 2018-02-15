/**
 * @author Shanty
 * created on 16.12.2015
 */
(function () {
    'use strict';
    
    angular.module('BlurAdmin.pages.test', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('test', {
            url: '/test',
            templateUrl: 'app/pages/test/test.html',
            title: 'Test',
            controller: 'TestCtrl',
            // resolve: {
            //    comparisonData: function(ComparisonService) {
            //      return ComparisonService.getComparisonData();
            //    },
            //   //  graphData:function(Websocketservice){
            //   //    return Websocketservice.getData();
            //   //  }
            // },
            sidebarMeta: {
              icon: 'ion-flag',
              order: 3,
            },
          });
    }
  })();
  