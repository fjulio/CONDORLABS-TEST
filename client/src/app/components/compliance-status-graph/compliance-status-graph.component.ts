import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../services/global';
import { Transaction } from '../../models/transaction';
import {TransactionService} from '../../services/transaction.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-compliance-status-graph',
  templateUrl: './compliance-status-graph.component.html',
  styleUrls: ['./compliance-status-graph.component.css']
})
export class ComplianceStatusGraphComponent implements OnInit {

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
          r[row.ds_compl_status_returned] = ++r[row.ds_compl_status_returned] || 1;
          return r;
      }, {});

       result = Object.keys(occurences).map(function (key) {
          return { key: key, value: occurences[key] };
      });

              this.dataSource = {
            chart: {
                caption: "Transactions",
                subCaption: "Total Requests per Compliance Status ",
                numberPrefix: "#",
                "xaxisname": "Status",
                "yaxisname": "Count",
                theme: "ocean"
            },
            data:[{label: result[0].key, value :result[0].value},{label: result[1].key, value :result[1].value}]
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
    var start_date;
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
            var result ;
            var counter = 0;
            var occurences = this.datas.reduce(function (r, row) {
            r[row.ds_compl_status_returned] = ++r[row.ds_compl_status_returned] || 1;
            return r;
        }, {});

         result = Object.keys(occurences).map(function (key) {
            return { key: key, value: occurences[key] };
        });

        this.dataSource = {
              chart: {
                  caption: "Transactions",
                  subCaption: "Total Requests per Compliance Status ",
                  numberPrefix: "#",
                  "xaxisname": "Status",
                  "yaxisname": "Count",
                  theme: "ocean"
              },
              data:[{label: result[0].key, value :result[0].value},{label: result[1].key, value :result[1].value}]
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
