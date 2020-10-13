import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CryptoChart } from '../models/crypto-chart';
import { CryptoCoin } from '../models/crypto-coin';

@Injectable({
  providedIn: 'root'
})
export class CoingeckoConsumerServiceService {

  constructor(private httpClient: HttpClient) { }

  getCoinInfo(fiat: string, crypto: string){
    const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=';
    return this.httpClient.get<CryptoCoin[]>(`${URL}${fiat}&ids=${crypto}`);
  }

  getCoinInfos(fiat: string, crypto: string[]){
    let cryptos =  `${crypto}`;
    const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=';
    return this.httpClient.get<CryptoCoin[]>(`${URL}${fiat}&ids=${cryptos}&category=coin&order=market_cap_desc`);
  }

  getMarketChartRange(fiat: string, crypto: string, from: string, to: string){
    const URL = `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart/range?vs_currency=`;
    return this.httpClient.get<CryptoChart>(`${URL}${fiat}&from=${from}&to=${to}`);
  }

}
