/**
 * @author Shanty
 * created on 16.12.2015
 */
(function () {
    'use strict';
    
    angular.module('BlurAdmin.pages.main', [])
        .config(routeConfig)
        .filter('floor', floor);
  
    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.when('/main','/main/list');

      $stateProvider
          .state('main', {
            url: '/main',
            //abstract: true,
            templateUrl: 'app/pages/main/main.html',
            title: 'Main',
            sidebarMeta: {
              icon: 'ion-android-home',
              order: 0,
            },
          }).state('main.list', {
            url: '/list',
            templateUrl: 'app/pages/main/list/coinList.html',
            title: 'Cryptocurrency Market Capitalizations',
            controller: 'coinListCtrl',
            resolve: {
              coinMarketData: function(MarketCapService) {
                return MarketCapService.getCrypto();
              },comparisonData: function(ComparisonService) {
                return ComparisonService.getComparisonData();
              },
            }

          }).state('main.detail', {
            url: '/detail/:symbol',
            templateUrl: 'app/pages/main/detail/coinDetail.html',
            title: 'Graph',
            controller: "coinDetailCtrl",
          });
          
    }
  
    function floor() {
      return function(input) {
          return Math.floor(input);
      };
    }


  })();
  