import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { Bitstamp } from './bitstamp.service';
import { BitcoinComponent } from './components/bitcoin/bitcoin.component';


@NgModule({
  declarations: [
    AppComponent,
    BitcoinComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Bitstamp],
  bootstrap: [AppComponent]
})
export class AppModule { }
