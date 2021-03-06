import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { routing } from "./app.routing";
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxCarouselModule } from 'ngx-carousel';

import { HomeComponent } from './home/home.cmp';
import { AddEventComponent } from './event/addevent/addEvent.cmp';
import { EventDetailComponent } from './event/eventDetails/eventDetail.cmp';
import { PaymentComponent } from './event/payment/payment.cmp';
import { HeaderComponent } from './common/header/header.cmp';
import { FooterComponent } from './common/footer/footer.cmp';
import { LoginComponent } from './common/login/login.cmp';
import { ProfileComponent } from './common/profile/profile.cmp';
import { LogoutComponent } from './common/logout/logout.cmp';
import { RegisterComponent } from './common/register/register.cmp';
import { NgXCreditCardsModule } from 'ngx-credit-cards';
import { CustomFormsModule } from 'ng2-validation';
import { TableModule } from 'primeng/table';

const routes: Routes = [];
@NgModule({
    declarations: [
        AppComponent, HomeComponent, HeaderComponent, FooterComponent, LoginComponent, RegisterComponent,
        AddEventComponent, EventDetailComponent, PaymentComponent, ProfileComponent, LogoutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        RouterModule,
        BrowserAnimationsModule,
        ToastModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        CarouselModule.forRoot(),
        NgxCarouselModule,
        NgXCreditCardsModule,
        CustomFormsModule,
        TableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
