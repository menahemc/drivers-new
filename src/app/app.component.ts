import { Component, OnInit } from '@angular/core';
import { DriverService } from './services/driver.service';
import { Observable } from 'rxjs';
import { Driver } from './model/driver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'viaTask';
  drivers$:Observable<Array<Driver>>;

  constructor(private driverService:DriverService){
    this.drivers$=this.driverService.getDataFromServer();
  }

  ngOnInit(){
  }
}
