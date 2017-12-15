import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { routing } from "./app.routing";
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { HomeComponent } from './home/home.cmp';
import { AddEventComponent } from './event/addevent/addEvent.cmp';
import { HeaderComponent } from './common/header/header.cmp';
import { FooterComponent } from './common/footer/footer.cmp';
import { LoginComponent } from './common/login/login.cmp';
import { RegisterComponent } from './common/register/register.cmp';


const routes: Routes = [];
@NgModule({
    declarations: [
        AppComponent, HomeComponent, HeaderComponent, FooterComponent, LoginComponent, RegisterComponent, AddEventComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing,
      RouterModule,
      BrowserAnimationsModule,
      ToastModule.forRoot(),
      BsDatepickerModule.forRoot(),
      TimepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
