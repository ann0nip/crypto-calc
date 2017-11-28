import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { appRouting } from './app.routing';

import { AppComponent } from './app.component';
import { Bitstamp } from './bitstamp.service';
import { BitcoinComponent } from './components/bitcoin/bitcoin.component';
import { EthereumComponent } from './components/ethereum/ethereum.component';


@NgModule({
  declarations: [
    AppComponent,
    BitcoinComponent,
    EthereumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    appRouting
  ],
  providers: [Bitstamp],
  bootstrap: [AppComponent]
})
export class AppModule { }
