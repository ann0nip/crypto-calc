import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BitcoinComponent } from './components/bitcoin/bitcoin.component';
import { EthereumComponent } from './components/ethereum/ethereum.component';

const appRoutes: Routes = [
  { 
    path: '', 
    component: BitcoinComponent
  },
  { 
    path: 'eth', 
    component: EthereumComponent
  }
  //{ path: '**', component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);