import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { EventService } from '../event.service';
import { NgxCarousel } from 'ngx-carousel';
declare var $: any;

@Component({
    selector: 'app-event-detail',
    templateUrl: './eventDetail.cmp.html',
    providers: [EventService],
    styles: [`
    
        h1{
          min-height: 200px;
          background-color: #ccc;
          text-align: center;
          line-height: 200px;
        }
        .leftRs {
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            width: 50px;
            height: 50px;
            box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);
            border-radius: 999px;
            left: 0;
        }
    
        .rightRs {
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            width: 50px;
            height: 50px;
            box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);
            border-radius: 999px;
            right: 0;
        }
      `]
})
export class EventDetailComponent implements OnInit {
    allEventData: any[] = [];
    eventData: any[] = [];
    ticketData: any[] = [];
    addressData: any[] = [];
    public carouselTileItems: Array<any>;
    public carouselTile: NgxCarousel;

    ngOnInit() {
        this.getEventDetails();
        this.GetAllEvents();
        this.getEventAddress();
        this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        this.carouselTile = {
            grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
            slide: 2,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            easing: 'ease'
        }
    }

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private eService: EventService) {
    }
    public carouselTileLoad(evt: any) {

        const len = this.carouselTileItems.length
        if (len <= 30) {
            for (let i = len; i < len; i++) {
                this.carouselTileItems.push(i);
            }
        }

    }
    getEventDetails() {
        this.eService.getEventDetails(this.route.snapshot.paramMap.get('id'))
            .subscribe((response) => {
                this.eventData = response;
                this.ticketData = this.eventData[0].TicketRate;
            },
            (error) => {
                console.log(error);
            });
    }

    getEventAddress() {
        this.eService.getEventAddress(this.route.snapshot.paramMap.get('id'))
            .subscribe((response) => {
                this.addressData = response;
                console.log(this.addressData)
            },
            (error) => {
                console.log(error);
            });
    }

    GetAllEvents() {
        this.eService.GetAllEvents()
            .subscribe((response) => {
                this.allEventData = response.filter(x => x.ProviderEventId != this.route.snapshot.paramMap.get('id'));
            },
            (error) => {
                console.log(error);
            });
    }
}



