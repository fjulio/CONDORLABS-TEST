import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../services/global';
import { Transaction } from '../../models/transaction';
import {DateFormatPipe} from '../../services/customDate.service';
import {TransactionService} from '../../services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  providers: [ TransactionService ]
})
export class TransactionComponent implements OnInit {

  public today = new Date();

  private transaction: Transaction;

  private transactions: Array<Transaction>;

  public filterQuery = "";
  public rowsOnPage = 20;
  public sortBy = "dt_Start_Log";
  public sortOrder = "asc";
  public currentDate = "";
  public data;
  private _custom:DateFormatPipe;
  constructor(private _transactionService: TransactionService ) { 
  	this.transaction = new Transaction('',0,'', '','', '','', '','','', '');
  }


  ngOnInit() {
    var current_date = this.transform(new Date());
    this._transactionService.transact(current_date).subscribe(
      response=>{
          this.data = response;
      },error=>{
        var errorMessage = <any>error;
        if(!errorMessage){
          console.log(error);
        }
      }
    );
  	
  }


  public onSubmit(){
      var start_date = "";
      var end_date ="";
      var state_code = this.transaction.cd_cebroker_state;
      console.log(this.transaction.dt_end_log + this.transaction.dt_end_log);
    if(this.transaction.dt_Start_Log != "")
          start_date = this.transform(new Date(this.transaction.dt_Start_Log));
    if(this.transaction.dt_end_log != "")
        end_date = this.transform(new Date(this.transaction.dt_end_log));
    if(this.transaction.dt_Start_Log  != "" && this.transaction.dt_end_log != ""){
      	this._transactionService.transacts(start_date, end_date, state_code).subscribe(
      		response=>{
            	this.data = response;
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