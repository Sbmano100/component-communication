import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Vendormodel } from './vendormodel';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  vendorobs=new Subject<Vendormodel>(); //
  //vendor: Vendormodel={} as Vendormodel;
  setvendor(v:Vendormodel){
    //this.vendor=v;
    this.vendorobs.next(v);             //
  }
  constructor() { }
}
