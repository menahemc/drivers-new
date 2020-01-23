import { Component, OnInit } from '@angular/core';
import { CardService } from './services/card.service';
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

  constructor(private cardService:CardService){
    this.drivers$=this.cardService.getDataFromServer();
  }

  ngOnInit(){
    this.drivers$.subscribe(x=>console.log(x));
  }
}
