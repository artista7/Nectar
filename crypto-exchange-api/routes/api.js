var express = require('express');
var axios = require('axios');
var coinMarketCapDataMapper = require('../mapper/coin-market-cap.mapper');
var koinexMapper = require('../mapper/koinex.mapper');
var coinomeMapper = require('../mapper/coinome.mapper');
var zebapiMapper = require('../mapper/zepapi.mapper');
var router = express.Router();
const CryptoDataService = require('../service/crypto-data-service');


router.get('/', function (req, res, next) {
    axios.get('https://koinex.in/api/ticker').then(
        function(response) {
            console.dir(response.data);
            res.send(response.data);
        }
    ).catch(function (error) {
        // handle error
        console.log(error);
        res.send("Error happened: "+error);
    })

});
router.get('/coinmarketdata', function (req, res) {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?convert=INR').then(
        function (response) {
            res.send(response.data);
        }
    )
});

var cache = {
    timestamp: 0
};

const interval = 60000;

router.get('/comparison', function (req, res) {
    var timestamp = new Date().getTime();
    if(timestamp - cache.timestamp > interval) {
        console.log('fetching new data');
        CryptoDataService.getLatestData().then(function(dbData) {
           cache = dbData;
           res.send(cache.data);
        }).catch(function (error) {
            console.log(error);
            res.status(500);
            res.send(error);
        });
    } else {
        console.log('serving from cache');
        res.send(cache.data);
    }
    // res.send('coin connected');

})

module.exports = router;


