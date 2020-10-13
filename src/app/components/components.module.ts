import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import 'chartjs-plugin-zoom';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SettingsPageModule } from '../pages/settings/settings.module';


@NgModule({
  declarations: [CardComponent],
  exports:[CardComponent,FormsModule],
  imports: [
    CommonModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    SettingsPageModule
  ]
})
export class ComponentsModule { }
