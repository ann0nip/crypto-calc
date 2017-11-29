import { Component, OnInit, Input } from '@angular/core';
import { Bitstamp } from '../../bitstamp.service';

@Component({
  selector: 'app-ethereum',
  templateUrl: './ethereum.component.html',
  styleUrls: ['./ethereum.component.css']
})
export class EthereumComponent implements OnInit {

  @Input() eth = 1; 
	@Input() eth_porcent = 0;
	@Input() ars = 10000; 
	@Input() ars_porcent = 0;

	private ETHtoUSD: number;
	private USDtoARS: number;

	constructor(private bitstampService:Bitstamp) {}

	ngOnInit() {
		this.loadRates();
	}

	loadRates() {
		this.bitstampService.getBTCandUSD().then(data => {
			this.USDtoARS = data.DOLAR_d_blue;
    });

  	this.bitstampService.getETHtoUSD().then(data => {
			this.ETHtoUSD = data.POLO_ETH_up;
		})
	}

}
