import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Bitstamp {

  constructor(private http: HttpClient) { }

  getBTCtoUSD(): Observable<any> {
  	return this.http.get('https://www.bitstamp.net/api/v2/ticker/btcusd/', {});
  }

  getUSDtoARS(): Observable<any> {
  	return this.http.get('http://ws.geeklab.com.ar/dolar/get-dolar-json.php', {});
  }

  getETHtoUSD(): Observable<any> {
  	return this.http.get('https://www.bitstamp.net/api/v2/ticker/ethusd/', {});
  }
}
