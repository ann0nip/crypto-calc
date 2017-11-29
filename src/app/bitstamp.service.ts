import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class Bitstamp {

  constructor(private http: Http) { }

  getBTCandUSD(): Promise<any> {
  	let promise = new Promise((resolve, reject) => {
	    let apiURL = 'https://coinmonitor.info/data_ar.json';
	    this.http.get(apiURL)
	      .toPromise()
	      .then(res => resolve(res.json()))
	  });
	  return promise;
  }

  getETHtoUSD(): Promise<any> {
  	let promise = new Promise((resolve, reject) => {
	    let apiURL = 'https://coinmonitor.info/altcoins.json';
	    this.http.get(apiURL)
	      .toPromise()
	      .then(res => resolve(res.json()))
	  });
	  return promise;
  }
}
