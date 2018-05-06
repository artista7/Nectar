import requests
import json

response = requests.get("https://koinex.in/api/ticker")
data = response.json()
koinex = data['prices']

response = requests.get("https://api.binance.com/api/v1/ticker/price")
data = response.json()

binance = {}
for i in range(0, len(data)):
    if(data[i]['symbol'][-3:]=='ETH'):
        symbol = data[i]['symbol'][:3]
        price = (float(data[i]['price'])*66.21*605)
        #print('Symbol is - ', symbol, ' and - ', price)
        binance[symbol]=price

for key in koinex:
    if(key in binance):
        koinexPrice = float(koinex[key])
        binancePrice = binance[key]
        print(key ,' - ', (koinexPrice-binancePrice)*100/koinexPrice)

del i, price, symbol, data, key, koinexPrice