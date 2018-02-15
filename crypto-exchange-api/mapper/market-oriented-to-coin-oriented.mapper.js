


var marketOrientedToCoinOrientedMapper = function (marketOriented) {
    var coinOriented = {};
    for(const market in marketOriented) {
        for(const coin in marketOriented[market]) {
            if(!coinOriented[coin]) {
                coinOriented[coin] = {};
            }
            coinOriented[coin][market] = marketOriented[market][coin];
        }
    }
    return coinOriented;
}
module.exports = marketOrientedToCoinOrientedMapper;