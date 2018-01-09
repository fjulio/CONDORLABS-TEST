import {Injectable} from '@angular/core';
import { Constants } from './constants';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})

@Injectable()
export class DateFormatPipe {

	constructor(){
	}

}