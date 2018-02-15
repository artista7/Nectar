


koinexMapper = function(koinexRes, coinObj) {
    let koinex = coinObj['koinex'] = {};
    for (const coins in koinexRes.stats) {
        koinex[coins] = {};
        koinex[coins].price = koinexRes.stats[coins]['last_traded_price'];
        koinex[coins].volume = koinexRes.stats[coins]['vol_24hrs'];
    }
    return coinObj;
}

module.exports = koinexMapper;