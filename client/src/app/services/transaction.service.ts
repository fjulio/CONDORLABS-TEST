import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable } from 'rxjs/Observable';
import {GLOBAL} from './global';

@Injectable()
export class TransactionService{

	public url: string;	

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}

	transact(start_date){
		let headers = new Headers({});
		return this._http.get(this.url+'/GetLogsRecordData?startdate='+start_date+'&enddate='+start_date,{headers: headers}).map(res=>res.json());
	}

	transacts(start_date, end_date,state_code ){
		let headers = new Headers({});
		console.log(this.url+'/GetLogsRecordData?startdate='+start_date+'&enddate='+end_date);
		return this._http.get(this.url+'/GetLogsRecordData?startdate='+start_date+'&enddate='+end_date+'&state='+state_code,{headers: headers}).map(res=>res.json());
	}
}