﻿import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(private _httpService: Http) { }
    ngOnInit() {
       
    }
}
