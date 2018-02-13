import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViewContainerRef } from '@angular/core';
import { EventService } from '../event.service';
import { NgxCarousel } from 'ngx-carousel';
import { parse } from 'querystring';
import { CreditCardValidator } from 'ngx-credit-cards';
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
    totalPrice: number = 0;
    totalTicket: number = 0;
    array1: any[] = [];
    array2: any[] = [];
    isEvent: boolean = true;
    billingModel: any = {};
    paymentModel: any = {};
    form: FormGroup;

    ngOnInit() {
        this.getEventDetails();
        this.GetAllEvents();
        this.getEventAddress();
        this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        this.carouselTile = {
            grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
            slide: 1,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: false
            },
            load: 1,
            touch: true,
            easing: 'ease'
        }


    }

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private eService: EventService,
        private fb: FormBuilder) {
        this.form = this.fb.group({
            cardNumber: ['', CreditCardValidator.validateCardNumber],
            cardExpDate: ['', CreditCardValidator.validateCardExpiry],
            cardCvv: ['', CreditCardValidator.validateCardCvc],
            cardName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        });
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

    getTicketDeatails(noofTicket: any, ticketPrice: any, index: any) {
        this.array1[index] = (noofTicket * ticketPrice);
        this.array2[index] = (noofTicket);

        this.totalPrice = 0;
        for (let i = 0; i < this.array1.length; i++) {
            if (this.array1[i]) {
                this.totalPrice = this.totalPrice + Number(this.array1[i]);
            }
        }

        this.totalTicket = 0;
        for (let i = 0; i < this.array2.length; i++) {
            if (this.array2[i]) {
                this.totalTicket = this.totalTicket + Number(this.array2[i]);
            }
        }
    }

    proceedToPayment() {
        this.isEvent = false;
    }

    addBilling(e) {
        if (this.billingModel) {

        } else {
            e.preventDefault();
            alert('hi')
        }

    }

    onClick(link: any) {
        // Do something relevant with the object... 
        return false;
    }

    onSubmit(){
        
    }


}



