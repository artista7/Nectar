/**
 * @author Shanty
 * created on 16.12.2015
 */
(function () {
    'use strict';
    
    angular.module('BlurAdmin.pages.roadmap', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('roadmap', {
            url: '/roadmap',
            templateUrl: 'app/pages/roadmap/roadmap.html',
            title: 'Roadmap',
            controller: 'RoadmapCtrl',
            resolve: {
              
            },
            sidebarMeta: {
              icon: 'ion-flag',
              order: 3,
            },
          });
    }
  })();
  