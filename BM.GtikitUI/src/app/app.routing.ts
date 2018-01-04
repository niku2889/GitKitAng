import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.cmp';
import { AddEventComponent } from './event/addevent/addEvent.cmp';
import { EventDetailComponent } from './event/eventDetails/eventDetail.cmp';
const userRole = localStorage.getItem('usertype');

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'addevent', component: AddEventComponent },
    { path: 'eventDetail/:id', component: EventDetailComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
