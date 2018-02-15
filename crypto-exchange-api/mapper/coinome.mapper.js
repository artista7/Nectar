

var mappings = {
    'btc-inr': 'BTC',
    'bch-inr': 'BCH',
    'ltc-inr': 'LTC',
    'dash-inr': 'DASH',
    'dgb-inr': 'DGB'
};

coinomeMapper = function(coinomeRes, coinObj) {
    let coinomeObj = coinObj['coinome'] = {};
    for(const coin in coinomeRes) {
        var mappedCoin = mappings[coin];
        coinomeObj[mappedCoin] = {};
        coinomeObj[mappedCoin].price = coinomeRes[coin]['last'];
        coinomeObj[mappedCoin].volume = coinomeRes[coin]['24hr_volume'];
    }
    return coinObj;
}

module.exports = coinomeMapper;