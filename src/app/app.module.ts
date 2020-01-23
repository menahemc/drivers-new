import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { DriverComponent } from './components/drivers/driver/driver.component';
import { HeaderComponent } from './components/drivers/header/header.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    DriverComponent,
    HeaderComponent,
    SearchPipe
    
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
