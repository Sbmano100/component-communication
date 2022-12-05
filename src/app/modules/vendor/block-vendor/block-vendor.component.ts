import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Vendormodel } from 'src/app/vendormodel';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  Selectedvendor?:Vendormodel;
  vendorvalue:Vendormodel={} as Vendormodel;
  constructor(private sharedservices:SharedService) { }

  ngOnInit(): void {

    this.sharedservices.vendorobs.subscribe((data)=>{
      this.vendorvalue=data;
      console.log("data: ", this.vendorvalue);
    })
  }

  // display(){
  //   console.log(this.Selectedvendor);
  // }

}
