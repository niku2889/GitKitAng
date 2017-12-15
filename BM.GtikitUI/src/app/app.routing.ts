import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.cmp';
import { AddEventComponent } from './event/addevent/addEvent.cmp';
const userRole = localStorage.getItem('usertype');

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'addevent', component: AddEventComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
