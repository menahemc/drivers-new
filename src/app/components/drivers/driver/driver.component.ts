import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Driver } from '../../../model/driver';



@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 600) {
        this.img.nativeElement.style.height=this.img.nativeElement.width*1.2+'px';


    }
  }


  @Input()
  driver: Driver;
  @ViewChild("img") img: ElementRef;
  constructor() { }

  ngOnInit() {
    // this.driver.profile_image
  }
  getImageSrc() {
    return this.driver.profile_image ? this.driver.profile_image : "https://i.imgur.com/S2IRHcz.jpg";
  }

  initImgHeight(width:number):number{
    return width*1.2;
  }

}
