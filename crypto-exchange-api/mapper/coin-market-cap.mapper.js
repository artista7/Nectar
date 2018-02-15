


mapCoinMarketCapDataToEntity = function(coins, coinObject) {
    // var coinObject = {};
    coinObject.coinMarketData = {};
    let coinMarketData = coinObject.coinMarketData;
    for(const coin of coins) {
        coinMarketData[coin.id] = {};
        coinMarketData[coin.id]['price'] = coin.price_inr;
        coinMarketData[coin.id]['volume'] = coin['24h_volume_inr'];
    }
    return coinObject;
}

module.exports = mapCoinMarketCapDataToEntity;