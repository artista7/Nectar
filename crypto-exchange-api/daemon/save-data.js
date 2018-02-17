
const koinexMapper = require('../mapper/koinex.mapper');
const coinomeMapper = require('../mapper/coinome.mapper');
const zebapiMapper = require('../mapper/zepapi.mapper');
const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;
const dbConstants = require('../consts/config').get();



saveData = function() {
    MongoClient.connect(dbConstants.url, (err, database) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('connected to database');

        var db = database.db(dbConstants.database);
        axios.all([
            axios.get('https://koinex.in/api/ticker'),
            axios.get('https://www.coinome.com/api/v1/ticker.json'),
            axios.get('https://www.zebapi.com/api/v1/market/ticker-new/btc/inr'),
            axios.get('https://www.zebapi.com/api/v1/market/ticker-new/bch/inr'),
            axios.get('https://www.zebapi.com/api/v1/market/ticker-new/ltc/inr'),
            axios.get('https://www.zebapi.com/api/v1/market/ticker-new/xrp/inr'),
            ]).then(axios.spread(function(koinexData, coinomeData, btcZebpay, bchZebpay, ltcZebpay, xrpZebpay) {
            var coinObject = {};
            coinObject = koinexMapper(koinexData.data, coinObject);
            coinObject = coinomeMapper(coinomeData.data, coinObject);


            coinObject = zebapiMapper(btcZebpay.data, coinObject, 'BTC');
            coinObject = zebapiMapper(bchZebpay.data, coinObject, 'BCH');
            coinObject = zebapiMapper(ltcZebpay.data, coinObject, 'LTC');
            coinObject = zebapiMapper(xrpZebpay.data, coinObject, 'XRP');
            let marketOrientedData = coinObject;
            let coinOrientedData = require('../mapper/market-oriented-to-coin-oriented.mapper')(marketOrientedData);
            const timestamp = new Date().getTime();
            const data = {
                timestamp,
                data: coinOrientedData
            };
            db.collection(dbConstants.collection).insertOne(data, function (err, result) {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log("saved to collections");
                database.close();
                
            });

        }))

    });
}

module.exports = saveData;
