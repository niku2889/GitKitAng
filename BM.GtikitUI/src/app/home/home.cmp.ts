import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from './home.service';
import { ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-home',
    templateUrl: './home.cmp.html',
    providers: [HomeService]
})
export class HomeComponent implements OnInit {
    eventData: any[] = [];
    noOfEvent: number = 0;
    isSeeMore: boolean = false;
    searchByCategory: string = '';
    searchByPlace: string = '';
    searchByDate: string = '';

    ngOnInit() {
        this.GetAllEvents();
    }

    constructor(
        private router: Router,
        private hService: HomeService,
        public toastr: ToastsManager,
        vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    GetAllEvents() {
        this.hService.GetAllEvents()
            .subscribe((response) => {
                this.eventData = response;
                this.noOfEvent = this.eventData.length;
                if (this.noOfEvent > 6) {
                    this.isSeeMore = true;
                }
            },
            (error) => {
                this.toastr.error(error, 'Error!');
            });
    }

    SeeMoreEvents() {
        this.isSeeMore = false;
    }

    GetSearchEvents() {
        this.hService.GetSearchEvents(this.searchByCategory, this.searchByPlace, this.searchByDate)
            .subscribe((response) => {
                this.eventData = response;
                this.noOfEvent = this.eventData.length;
                if (this.noOfEvent > 6) {
                    this.isSeeMore = true;
                }
            },
            (error) => {
                this.toastr.error(error, 'Error!');
            });
    }
}



