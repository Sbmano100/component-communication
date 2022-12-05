import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Vendormodel } from 'src/app/vendormodel';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  @Input() vendor:Vendormodel[]=[];
  @Output() emitter=new EventEmitter<Vendormodel>();
  constructor(private sharedservices:SharedService) { }

  selectedvendor?:Vendormodel;
  onselectdisplay(vendor:Vendormodel):void{
   // this.selectedvendor=vendor;
    //console.log(this.selectedvendor);
    this.sharedservices.setvendor(vendor);
    this.emitter.emit(vendor);
  }
  ngOnInit(): void {
  }

}
