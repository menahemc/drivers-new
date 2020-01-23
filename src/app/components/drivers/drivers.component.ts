import { Component, OnInit, Input } from '@angular/core';
import { Driver } from '../../model/driver';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  @Input()
  drivers:Array<Driver>;
  query:string;

  constructor() { }

  ngOnInit() {
    console.log(this.drivers);
  }
  ngOnChanges(){
    console.log(this.drivers);
  }
  onSearch(query){
    this.query=query;
  }

}
