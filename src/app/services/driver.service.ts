import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../model/driver';


@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }

  getDataFromServer():Observable<Array<Driver>>{
    return this.http.get<Array<Driver>>("http://private-05627-frontendnewhire.apiary-mock.com/contact_list", {})
    
  }
}
