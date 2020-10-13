import { CryptoChart } from './crypto-chart';

export interface CryptoCoin {
    
    id: string;
    symbol: string;
    image: string;
    current_price: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    circulating_supply: number;
    market_cap: number;
    market_cap_change_24h:number;
    market_cap_change_percentage_24h:number;
    market_cap_rank: number ;
    high_24h: number;
    low_24h: number;
    chart : CryptoChart;

}
