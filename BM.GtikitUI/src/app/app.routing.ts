import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.cmp';
const userRole = localStorage.getItem('usertype');

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
