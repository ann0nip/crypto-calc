import { Component, OnInit, Input } from '@angular/core';
import { Bitstamp } from '../../bitstamp.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {
	@Input() btc = 1; 
	@Input() btc_porcent = 0;
	@Input() ars = 10000; 
	@Input() ars_porcent = 0;

	private BTCtoUSD: number;
	private USDtoARS: number;

	constructor(private bitstampService:Bitstamp) {}

	ngOnInit() {
		this.loadRates();
	}

	loadRates() {
		this.bitstampService.getBTCtoUSD().subscribe(data => {
			this.BTCtoUSD = data.last;
    });
		this.bitstampService.getUSDtoARS().subscribe(data => {
			this.USDtoARS = data.libre;
    });
	}

}
