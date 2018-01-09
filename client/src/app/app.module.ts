import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DataTableModule} from "angular2-datatable";
import { appRouting, appRoutingProviders } from './app.routing';


// Import angular2-fusioncharts
import { FusionChartsModule } from 'angular2-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

import { AppComponent } from './app.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { NavComponent } from './components/nav/nav.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ComplianceStatusGraphComponent } from './components/compliance-status-graph/compliance-status-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    NavComponent,
    ChartsComponent,
    ComplianceStatusGraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
    DataTableModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
