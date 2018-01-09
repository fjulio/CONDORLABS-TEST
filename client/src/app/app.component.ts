import { Component, OnInit } from '@angular/core';
import { TransactionService } from './services/transaction.service';
import {Transaction} from './models/transaction';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[TransactionService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Transaction';
  public transaction: Transaction;

  constructor(private _transactionService:TransactionService ){
    this.transaction = new Transaction('',0,'','','','','','','','', '');
  }

  ngOnInit(){
  	var texto = this._transactionService.transact(null).subscribe(
  		response =>{
  			console.log(texto);
  		},error=>{
  			var errorMessage = <any> error;

  			if(errorMessage !=null ){
  				console.log(error);
  			}
  		}
  	);
  	
  }
  public onSubmit(){
  	console.log(this.transaction);
  }
}
