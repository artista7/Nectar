/**
* @author Shanty
* created on 16.12.2015
*/
(function () {
    'use strict';
    
    // angular.module('BlurAdmin.pages.test').service('ComparisonService', function($http, $q) {
    //     var cryptoData = undefined;
    //     var service = {
    //         getComparisonData: function(){
    //             if(!cryptoData){
    //                 var deferred = $q.defer();
    //                 $http.get('http://192.168.2.2:9000/api/comparison', { cache: true }).then(function(resp) {
    //                 //$http.get('https://api.coinmarketcap.com/v1/ticker/', { cache: true }).then(function(resp) {
    //                     cryptoData =  resp.data;
    //                     deferred.resolve(cryptoData);
    //                 }, function(error) {
    //                 cryptoData =  error;
    //                 deferred.reject(error);
    //                 });
    //             cryptoData = deferred.promise;
    //             }
    //         return $q.when(cryptoData);
    //         },
    //     }   
    //     return service;
    // });

    angular.module('BlurAdmin.pages.test').service('Websocketservice', function($q, $rootScope) {
        var myData = [];
        // if ("WebSocket" in window)
        // {
        //     // We return this object to anything injecting our service
        //     //var Service = {};
        //     // Create our websocket object with the address to the websocket
        //     var ws = new WebSocket("wss://stream.binance.com:9443/ws/xrpbtc@kline_1m");
            
        //     ws.onopen = function(){  
        //         console.log("Socket has been opened!");  
        //     };
            
        //     ws.onclose = function(){  
        //         console.log("Socket has been closed!");  
        //     };
            
        //     ws.onmessage = function(message) {
        //         listener(JSON.parse(message.data));
        //     };
            
        //     function inputToGraphMapper(input){
        //         // var {t: t, o: o, c: c, h: h, l: l}  = input;
        //         // var data = {
        //         //     t, o, c, h, l
        //         // };
        //         // data.t = new Date(data.t);
        //         // // data.t = new Date(date.getYear(), date.getMonth(), date.getDate());
        //         // return data;
        //         var data = {
        //             t : new Date(input.t), o : input.o, c : input.c, h : input.h, l : input.l
        //         };
        //         //data.t = new Date(data.t);
        //         // data.t = new Date(date.getYear(), date.getMonth(), date.getDate());
        //         return data;  
        //     }

        //     function listener(data) {
        //         //ECMA 6
        //         data = inputToGraphMapper(data.k);
        //         console.log("Ye Le : " + data);
        //         if(myData.length == 0){
        //             myData.push(data);
        //         }
        //         else{
        //             if(myData[myData.length-1].t.getTime() === data.t.getTime()){
        //                 myData[myData.length-1] = data;
        //             }
        //             else{
        //                 myData.push(data);
        //             }
        //         }
        //         console.log(myData);
        //     }
        //     window.onbeforeunload = function(event) {
        //         ws.close();
        //     };
        // }
        // else
        // {
        //     // The browser doesn't support WebSocket
        //     alert("WebSocket NOT supported by your Browser!");
        // }    
        return {
            getData : myData
        }
        }
    );

    angular.module('BlurAdmin.pages.test').service('GraphDataServce', GraphDataServce);

    function GraphDataServce($http, $q){
        var graphData = undefined;
        var service = {
            getGraphData : function(coin, interval, limit = 500){
                var symbol = coin.toUpperCase() + "BTC";
                if(!graphData){
                    var deferred = $q.defer;
                    $http.get("https://api.binance.com/api/v1/klines?symbol=" + symbol + "&interval=" + interval).then(function(resp){
                        graphData = resp.data;
                        deferred.resolve(graphData);
                    }, function(error){
                        graphData = error;
                        deferred.reject(error);
                    });
                    graphData = deferred.promise;
                }
                return $q.when(graphData);
            }
        }
        return service;
    }

    ///api/v1/klines
})();