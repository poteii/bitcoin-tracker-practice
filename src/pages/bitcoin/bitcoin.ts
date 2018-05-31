import { BitcoinProvider } from './../../providers/bitcoin/bitcoin';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BitCoin } from '../../models/bitcoin.model';
import { Observable } from 'rxjs/Observable'

@IonicPage()
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html',
})
export class BitcoinPage {

  currency: string = 'GBP';
  bitcoin$: Observable<BitCoin>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bitcoinProvider: BitcoinProvider) {
  }

  ionViewDidLoad() {
    //get the currency price
    this.getBitcoinPrice();
  }

  getBitcoinPrice() {
    this.bitcoin$ = this.bitcoinProvider.getBitcoinPrice(this.currency);
  }
}
