import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.cmp';
import { AddEventComponent } from './event/addevent/addEvent.cmp';
import { EventDetailComponent } from './event/eventDetails/eventDetail.cmp';
import { PaymentComponent } from './event/payment/payment.cmp';
import { ProfileComponent } from './common/profile/profile.cmp';
import { LogoutComponent } from './common/logout/logout.cmp';
const userRole = localStorage.getItem('usertype');

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'addevent', component: AddEventComponent },
    { path: 'eventDetail/:id', component: EventDetailComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'logout', component: LogoutComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
