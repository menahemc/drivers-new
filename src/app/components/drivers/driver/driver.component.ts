import { Component, OnInit, Input } from '@angular/core';
import { Driver } from '../../../model/driver';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {

  @Input()
  driver:Driver;
  constructor() { }

  ngOnInit() {
    // this.driver.profile_image
  }
getImageSrc(){
  return this.driver.profile_image?this.driver.profile_image:"https://i.imgur.com/S2IRHcz.jpg";
}

}
