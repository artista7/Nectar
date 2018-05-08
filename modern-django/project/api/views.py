import json
from django.http import JsonResponse
from binance.client import Client
from . import indicators
from . import utility
import time

client = Client("apiKey", "apiSecret")  
factor=2
_interval=utility.getInterval(factor)
coinSymbolList = ['ETHBTC','XRPBTC', 'BNTBTC', 'REQBTC', 'IOTABTC', 'SALTBTC', 'CNDBTC', 'GVTBTC', 'BCPTBTC', 'POWRBTC', 'ADABTC']
_dict={}

def macd(request):
    for coinSymbol in coinSymbolList:
        close = utility.getClose(client, coinSymbol, _interval)
        myIndicator = indicators.ImprovedMacd(close, factor, coinSymbol)
        _dict[coinSymbol]={'Buy':myIndicator.shouldBuy(), 'changeIndex':myIndicator.getPercentageChange()}
    response_data = _dict
    return JsonResponse(response_data)