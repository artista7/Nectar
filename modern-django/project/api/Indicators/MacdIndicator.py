"""
Created on Sun Apr 22 14:45:46 2018

@author: bluedanube
"""

import matplotlib.pyplot as plt
import pandas as pd
    
class MACDIndicator():
    def __init__(self, close, factor, coinSymbol):
        self.close=close
        self.factor=factor
        self.coinSymbol=coinSymbol
        dict = {}
        dict['close'] = self.close
        dict['movingAvg7'] = self.close
        dict['movingAvg26'] = self.close
        dict['simpleIndicator'] = self.close
        df = pd.DataFrame(dict)
        # Calculate avgs from dataframe
        df.movingAvg7 = df.close.rolling(window=7).mean()
        df.movingAvg26 = df.close.rolling(window=26).mean()
        df.simpleIndicator = df.movingAvg7 - df.movingAvg26
        self.df=df

    
    def shouldBuy(self):
        #truncate to 20 days time
        df = self.df.tail(20*self.factor)
        if (df['simpleIndicator'].iloc[-1]>0):
            return True
        else:
            return False
    
    def getSlope(self):
        df=self.df
        return (df['movingAvg7'].iloc[-1] - df['movingAvg7'].iloc[-2])*100/(df['movingAvg7'].iloc[-2])
    
    def plotGraph(self):
        plt.plot(self.close)
        plt.ylabel('time')
        plt.xlabel('' + self.coinSymbol)
        plt.show()
        
    def plotIndicator(self):
        df=self.df
        df = df.tail(20*self.factor)
        indicator_df = df.loc[:,['movingAvg7', 'movingAvg26', 'close']]
        indicator_df.plot();
        
        
        
        
        
        
        
        
        
        
        