import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChartDataSets } from 'chart.js';
import {  Label } from 'ng2-charts';
import { CryptoCoin } from 'src/app/models/crypto-coin';
import { SettingsPage } from 'src/app/pages/settings/settings.page';
import { CoingeckoConsumerServiceService } from 'src/app/services/coingecko-consumer-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() bitcoin$: CryptoCoin;
  @Input() selectedFiat: string;
  @Input () chartData: ChartDataSets[];
  @Input() chartLabels: Label[];

  // Options
  chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'chart price'
    },
    pan: {
      enabled: true,
      mode: 'xy'
    },
    zoom: {
      enabled: true,
      mode: 'xy'
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: true
      }]
      }
  };
  
  currentModal = null;

  modal : any;
  settings  = {
    chartType : 'line',
    showLegend : false,
    yesterdayDate: '',
    currentDate : '',
    chartColors:  [
      {
        borderColor: '#3dc2ff',
        backgroundColor: '#36abe0'
      }
    ]
  };

  constructor(private chartProvider: CoingeckoConsumerServiceService,public modalController: ModalController) {
  }

  ngOnInit() {
    //this.getData();
  }

  ionViewDidEnter (){
    
  }
  async presentModal() {
     this.modal = await this.modalController.create({
      component: SettingsPage,
      swipeToClose: true,
      componentProps: {
        settings: this.settings
      }
    });
    this.modal.onWillDismiss().then(dataReturned => {
      // trigger when about to close the modal
      this.settings = dataReturned.data;
      this.updateChart();
    });
    return await this.modal.present();
  }


private toTimestamp(strDate){
  var datum = Date.parse(strDate);
  return (datum/1000).toString();
 }

callChartService(){
  if((this.settings.yesterdayDate =='' || this.settings.currentDate =='')
     || (this.toTimestamp(this.settings.yesterdayDate) > this.toTimestamp(this.settings.currentDate))){
      var currentDate = new Date();
      var yesterdayDate = new Date();
      yesterdayDate.setDate(yesterdayDate.getDate()- 1);
      this.settings.currentDate = currentDate.toDateString();
      this.settings.yesterdayDate = yesterdayDate.toDateString();
  }
  return this.chartProvider.getMarketChartRange(this.selectedFiat, this.bitcoin$.id, this.toTimestamp(this.settings.yesterdayDate),this.toTimestamp(this.settings.currentDate)).toPromise();
}
  async updateChart(){
    this.chartLabels = [];
    this.chartData[0].data = [];
    let result = await this.callChartService();

    for (let entry of result.prices) {
      this.chartLabels.push(entry[0].toString());
      this.chartData[0].data.push(entry[1]);
    }
}


}
