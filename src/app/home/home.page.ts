import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { CryptoCoin } from '../models/crypto-coin';
import { CoingeckoConsumerServiceService } from '../services/coingecko-consumer-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedCrypto = 'bitcoin';
  fiats = ['USD', 'EUR', 'GBP', 'JPY'];
  selectedFiat = 'USD';
  cryptos = ['bitcoin', 'ethereum', 'ripple', 'litecoin'];
  bitcoins$: CryptoCoin[];
  bitcoin$: CryptoCoin;
  chartData: ChartDataSets[] = [{ data: [], label: 'Chart price' }];
  chartLabels: Label[];
  splash = true;
  sideMenu: any;
  constructor(public navCtrl: NavController,private coinProvider: CoingeckoConsumerServiceService,private route: ActivatedRoute,  private router: Router) {
   this.route.queryParams.subscribe(params => {
    if (params && params.special) {
      this.selectedCrypto = JSON.parse(params.special); 
      this.changeFiat();
      this.sideMenu = document.querySelector('ion-menu');
      this.sideMenu.toggle();
    }else{
      this.changeFiat();
    }
  });
  }


  async ngOnInit(){
    this.sideMenu = document.querySelector('ion-menu');
    this.sideMenu.style.visibility = 'hidden';
    setTimeout(()=>{
      this.sideMenu.style.visibility = 'visible';
      this.splash = false;
    }, 4000);
  }

  callService(){
    return this.coinProvider.getCoinInfos(this.selectedFiat, this.cryptos).toPromise();
  }

  callChartService(){
    var currentDate = new Date();
    var yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate()- 1);
    return this.coinProvider.getMarketChartRange(this.selectedFiat, this.selectedCrypto, this.toTimestamp(yesterdayDate),this.toTimestamp(currentDate)).toPromise();
  }

  private toTimestamp(strDate){
    var datum = Date.parse(strDate);
    return (datum/1000).toString();
   }

  async changeFiat(){
    let d = await this.callService();
    this.bitcoins$ = d;
    this.bitcoin$ = d.find(a => a.id == this.selectedCrypto);
    this.bitcoin$.chart = await this.callChartService();
    this.chartLabels = [];
        this.chartData[0].data = [];

        for (let entry of this.bitcoin$.chart.prices) {
          this.chartLabels.push(entry[0].toString());
          this.chartData[0].data.push(entry[1]);
        }
  }
  
}
