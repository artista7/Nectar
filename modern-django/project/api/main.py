from binance.client import Client
from Indicators.MacdIndicator import *
from Indicators.ImprovedMacd import *
from Utility import getInterval, getClose
import time

client = Client("apiKey", "apiSecret")  
factor=2
_interval=getInterval(factor)
coinSymbolList = ['ETHBTC','XRPBTC', 'BNTBTC', 'REQBTC', 'IOTABTC', 'SALTBTC', 'CNDBTC', 'GVTBTC', 'BCPTBTC', 'POWRBTC', 'ADABTC']
_dict={}



for coinSymbol in coinSymbolList:
    close = getClose(client, coinSymbol, _interval)
    myIndicator = ImprovedMacd(close, factor, coinSymbol)
    _dict[coinSymbol]={'Buy':myIndicator.shouldBuy(), 'changeIndex':myIndicator.getPercentageChange()}
print(_dict)