import { Component, OnInit } from '@angular/core';
import { Vendormodel } from 'src/app/vendormodel';
import { VendorserviceService } from 'src/app/vendorservice.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  constructor(private vendorservice:VendorserviceService) { }

  vendorlist=this.vendorservice.vendorList;
    ngOnInit(): void {
  }
  list:Vendormodel={} as Vendormodel
  childlist(event:Vendormodel){
    this.list=event;
    console.log(event);
  }
}
