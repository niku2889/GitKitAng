import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViewContainerRef } from '@angular/core';
import { EventService } from '../event.service';
import { NgxCarousel } from 'ngx-carousel';
import { parse } from 'querystring';
import { CreditCardValidator } from 'ngx-credit-cards';
declare var $: any;
import { CommonService } from '../../common/common.service';

@Component({
    selector: 'app-event-detail',
    templateUrl: './eventDetail.cmp.html',
    providers: [EventService, CommonService],
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
    successMsg: string = '';
    errorMsg: string = '';
    successMsg1: string = '';
    errorMsg1: string = '';
    noTicket: string = '';
    customerId: any;
    userData: any;
    readonly:boolean = false;

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
        let custId = localStorage.getItem('custid');
        if (custId != '' && custId != undefined && localStorage.getItem('login') == 'true') {
            this.cService.getAllUserData()
                .subscribe((response) => {
                    this.userData = response;
                    this.billingModel = {
                        firstname: this.userData.GTCustomerMain != null ? this.userData.GTCustomerMain[0].FirstName : '',
                        lastname: this.userData.GTCustomerMain != null ? this.userData.GTCustomerMain[0].LastName : '',
                        email: this.userData.GTCustomerMain != null ? this.userData.GTCustomerMain[0].Email : '',
                    }
                    this.readonly = true;
                },
                (error) => {
                    this.errorMsg = error._body;
                    setTimeout(function () {
                        this.errorMsg = '';
                    }.bind(this), 5000);
                });
        }

    }

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private eService: EventService,
        private cService: CommonService,
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
            },
            (error) => {
                console.log(error);
            });
    }

    GetAllEvents() {
        this.eService.GetAllEvents()
            .subscribe((response) => {
                this.allEventData = response.filter(x => x.ProviderEventId != this.route.snapshot.paramMap.get('id'));
                this.carouselTileItems = [];
                for (let i = 0; i < this.allEventData.length; i++) {
                    this.carouselTileItems.push(i);
                }
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

        if (this.array2.length > 0) {
            this.isEvent = false;
        } else {
            this.noTicket = "Kindly choose any ticket type to proceed."
            setTimeout(function () {
                this.noTicket = '';
            }.bind(this), 5000);
        }
    }

    addBilling(e) {
        if (this.billingModel) {
            let custId = localStorage.getItem('custid');
            if (custId != '' && custId != undefined && localStorage.getItem('login') == 'true') {
                this.customerId = custId;
                //Billing Address service call
                this.eService.addBillingAddress(this.billingModel, custId)
                    .subscribe(
                    data1 => {
                        this.addOrder();
                        this.successMsg = "Successfully added customer billing and order details";
                        setTimeout(function () {
                            this.successMsg = '';
                        }.bind(this), 5000);
                    },
                    error => {
                        this.errorMsg = error._body;
                        setTimeout(function () {
                            this.errorMsg = '';
                        }.bind(this), 5000);
                    });
            }
            else {
                this.cService.createBillingUser(this.billingModel)
                    .subscribe(
                    data => {
                        this.customerId = data.Id;
                        localStorage.setItem('custid',this.customerId);
                        localStorage.setItem('login','true');
                        //Billing Address service call
                        this.eService.addBillingAddress(this.billingModel, data.Id)
                            .subscribe(
                            data1 => {
                                this.addOrder();
                                this.successMsg = "Successfully added customer billing and order details";
                                setTimeout(function () {
                                    this.successMsg = '';
                                }.bind(this), 5000);
                            },
                            error => {
                                this.errorMsg = error._body;
                                setTimeout(function () {
                                    this.errorMsg = '';
                                }.bind(this), 5000);
                            });


                    },
                    error => {
                        this.errorMsg = error._body;
                        setTimeout(function () {
                            this.errorMsg = '';
                        }.bind(this), 5000);
                    });
            }

        }
    }

    addOrder() {
        //Customer order service call
        let tData: any[] = [];
        for (let i = 0; i < this.ticketData.length; i++) {
            if (this.array2[i] > 0) {
                const ticket = {
                    "OrderRowId": this.ticketData[i].type,
                    "EventId": this.ticketData[i].type,
                    "TicketRateId": i + 1,
                    "Qty": this.array2[i],
                    "RegularPrice": this.array1[i],
                    "Discount": 10,
                    "SubTotal": this.array1[i],
                    "ServiceFee": 0,
                    "IsVoid": true,
                    "EventName": this.eventData[0].EventName
                };
                tData.push(ticket);
            }
        }

        this.eService.addCustomerOrder(this.customerId, tData)
            .subscribe(
            data2 => {
                this.successMsg = "Successfully added customer billing and order details";
                setTimeout(function () {
                    this.successMsg = '';
                }.bind(this), 5000);
            },
            error => {
                this.errorMsg = error._body;
                setTimeout(function () {
                    this.errorMsg = '';
                }.bind(this), 5000);
            });
    }


    addCreditCard() {
        if (this.billingModel && this.customerId) {
            if (this.paymentModel) {
                this.eService.addCardDetails(this.paymentModel, this.customerId)
                    .subscribe(
                    data1 => {
                        this.router.navigate(['/payment']);
                        this.successMsg1 = "Successfully added payment details";
                        setTimeout(function () {
                            this.successMsg1 = '';
                        }.bind(this), 5000);
                    },
                    error => {
                        this.errorMsg1 = error._body;
                        setTimeout(function () {
                            this.errorMsg = '';
                        }.bind(this), 5000);
                    });
            }
        } else {
            this.errorMsg1 = "Please enter billing deails";
            setTimeout(function () {
                this.errorMsg1 = '';
            }.bind(this), 5000);
        }
    }

    onClick(link: any) {
        // Do something relevant with the object... 
        return false;
    }

    onSubmit() {

    }


}



