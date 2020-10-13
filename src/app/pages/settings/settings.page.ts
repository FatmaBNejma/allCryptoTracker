import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  colorpicker:string;
  currentYear : number=2020;

    
  constructor(public modalCtrl: ModalController) {
    this.currentYear = new Date().getFullYear();
  }
  @Input() public settings: any;

  ngOnInit() {
    
  }

  typeChanged(e) {
    const on = e.detail.checked;
    this.settings.chartType = on ? 'line' : 'bar';
  }

  dismissModal() {  
    this.modalCtrl.dismiss(this.settings);  
  }  
  changeColorPicker(colorpicker){
    this.colorpicker = colorpicker;
  }
  setColor(color){
    if(this.colorpicker == 'backgroundColor'){
      this.settings.chartColors[0].backgroundColor=color;
    }else{
      this.settings.chartColors[0].borderColor=color;
    }
  }
}
