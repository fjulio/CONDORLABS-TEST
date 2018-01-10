import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../services/global';
import { Transaction } from '../../models/transaction';
import {TransactionService} from '../../services/transaction.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  dataSource: Object;
  demoId: string;
  private datas;
  private count: number;
  private transaction: Transaction;
  constructor( private _transactionService: TransactionService ) {
    this.demoId = "ex1";
    this.transaction = new Transaction('',0,'', '','', '','', '','','', '');

   }

  ngOnInit() {
    var current_date = this.transform(new Date());
    this._transactionService.transact(current_date).subscribe(
      response=>{
          this.datas = response;
          var result ;
          var counter = 0;
          var occurences = this.datas.reduce(function (r, row) {
          r[row.cd_machine] = ++r[row.cd_machine] || 1;
          return r;
      }, {});

       result = Object.keys(occurences).map(function (key) {
          return { key: key, value: occurences[key] };
      });

              this.dataSource = {
            chart: {
                caption: "Transactions",
                subCaption: "Total Requests per Machine",
                numberPrefix: "#",
                "xaxisname": "Machine",
                "yaxisname": "Count",
                theme: "ocean"
            },
            data: Object.keys(occurences).map(function (key) {
                return { label: key, value: occurences[key] };
              })
          };
      },error=>{
        var errorMessage = <any>error;
        if(!errorMessage){
          console.log(error);
        }
      }
    );
  }

  public onSubmit(){
    var start_date ;
    var end_date;
    var state_code = this.transaction.cd_cebroker_state;
    if(this.transaction.dt_Start_Log != null)
          start_date = this.transform(new Date(this.transaction.dt_Start_Log));
    if(this.transaction.dt_end_log != null)
        end_date = this.transform(new Date(this.transaction.dt_end_log));
    if(this.transaction.dt_Start_Log  != "" && this.transaction.dt_end_log != ""){
      this._transactionService.transacts(start_date, end_date, state_code).subscribe(
        response=>{
             this.datas = response;
            var counter = 0;
            var occurences = this.datas.reduce(function (r, row) {
            r[row.cd_machine] = ++r[row.cd_machine] || 1;
            return r;
        }, {});


        this.dataSource = {
              chart: {
                  caption: "Transactions",
                  subCaption: "Total Requests per Machine",
                  numberPrefix: "#",
                  "xaxisname": "Machine",
                  "yaxisname": "Count",
                  theme: "ocean"
              },
              data: Object.keys(occurences).map(function (key) {
                return { label: key, value: occurences[key] };
              })
            };
        },error=>{
          var errorMessage = <any>error;
          if(!errorMessage){
            console.log(error);
          }
        }
      );
    }
  }


  private transform(Date){
      var today = Date;
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!

      var yyyy = today.getFullYear();
      if(dd<10){
          dd='0'+dd;
      } 
      if(mm<10){
          mm='0'+mm;
      } 
      var todayCast = mm+'/'+dd+'/'+yyyy;
      return todayCast;
  }

}
