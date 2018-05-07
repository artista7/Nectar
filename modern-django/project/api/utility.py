#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Apr 22 17:44:52 2018

@author: bluedanube
"""
from binance.client import Client
from binance.enums import *

def getInterval(factor):
    if(factor == 1):
        _interval = KLINE_INTERVAL_1DAY
    elif(factor == 2):
        _interval = KLINE_INTERVAL_12HOUR
        print(KLINE_INTERVAL_12HOUR)
    elif(factor == 24):
        _interval = KLINE_INTERVAL_1HOUR
    elif(factor == 48):
        _interval = KLINE_INTERVAL_30MINUTE
    else:
        raise ValueError('Allowed values are 1, 2, 24, 48')
    return _interval

def getClose(client, _symbol, _interval):
    candlesBuy = client.get_klines(symbol=_symbol, interval=_interval)
    
    close = []
    for i in range(0, len(candlesBuy)-1):
        close.append(float(candlesBuy[i][4]))
        
    return close