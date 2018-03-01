


coinomeMapper = function(coinomeRes, coinObj) {
    let coinomeObj = coinObj['coinome'] = {};
    for(const coin in coinomeRes) {
        var mappedCoin = getCoinName(coin);
        coinomeObj[mappedCoin] = {};
        coinomeObj[mappedCoin].price = coinomeRes[coin]['last'];
        coinomeObj[mappedCoin].volume = coinomeRes[coin]['24hr_volume'];
    }
    return coinObj;
}

getCoinName = function(mapping) {
    let i = mapping.indexOf('-');
    let mappedCoin = mapping.substring(0, i);
    mappedCoin = mappedCoin.toUpperCase();
    return mappedCoin;
}

module.exports = coinomeMapper;