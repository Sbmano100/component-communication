import { Injectable } from '@angular/core';
import { Vendormodel} from './vendormodel';

@Injectable({
  providedIn: 'root'
})
export class VendorserviceService {


  vendorList:Vendormodel[]=[
    {name:'mano',age:22,city:'sivagangai'},
    {name:'nandhu',age:18,city:'madurai'},
    {name:'raj',age:21,city:'Trichy'},
  ];
  constructor() { }
}
