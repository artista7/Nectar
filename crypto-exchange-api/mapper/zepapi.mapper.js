


zebapiMapper = function(zebapiRes, coinObj, coinName) {
    if(!coinObj['zebpay']) {
        coinObj['zebpay'] = {};
    }
    let zebapiCoin = coinObj['zebpay'];
    zebapiCoin[coinName] = {};
    zebapiCoin[coinName].price = zebapiRes['market'];
    zebapiCoin[coinName].volume = zebapiRes['volume'];
    return coinObj;
}

module.exports = zebapiMapper;