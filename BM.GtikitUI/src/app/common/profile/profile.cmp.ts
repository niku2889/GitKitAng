import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { CommonService } from '../common.service';
declare var $: any;

@Component({
    selector: 'app-profile',
    templateUrl: './profile.cmp.html',
    styleUrls: ['./profile.cmp.css'],
    providers: [CommonService]
})
export class ProfileComponent implements OnInit {
    model: any = {};
    loading = false;
    successMsg: string = '';
    errorMsg: string = '';
    ticketData: any;
    eventData: any;
    ticket: any[] = [];
    cols: any[];
    cols1: any[];
    profileData: {
        name: any,
        address: any,
        phone: any,
        email: any,
        cmpname: any,
        zip: any,
        city: any,
        state: any,
        country: any,
        firstName: any,
        lastName: any,
        password: any,
        confirmPassword: any,
    };

    ngOnInit() {
        this.profileData = {
            name: '',
            address: '',
            phone: '',
            email: '',
            cmpname: '',
            zip: '',
            city: '',
            state: '',
            country: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
        };
        this.getTickets();
        this.cols = [
            { field: 'no', header: 'Sr No.', width: '10%' },
            { field: 'date', header: 'Date', width: '18%' },
            { field: 'eventname', header: 'Event Name', width: '15%' },
            { field: 'qty', header: 'Quantity', width: '11%' },
            { field: 'price', header: 'Price', width: '12%' },
            { field: 'fee', header: 'Fee', width: '10%' },
            { field: 'dicount', header: 'Discount', width: '12%' },
            { field: 'total', header: 'Total', width: '12%' }
        ];
        this.cols1 = [
            { field: 'EventName', header: 'Event Details', width: '60%' },
            { field: 'TotalTicketQty', header: 'Tickets', width: '20%' },
            { field: 'TotalTicketSoldQty', header: 'Total Sale', width: '20%' }
        ];
    }

    constructor(
        private router: Router,
        private cService: CommonService) {
    }

    getTickets() {
        this.cService.getAllUserData()
            .subscribe((response) => {
                this.ticketData = response;
                console.log(this.ticketData)
                this.eventData = this.ticketData.Events != null ? this.ticketData.Events.filter(a => a.IsActive == true) : [];
                this.profileData = {
                    name: (this.ticketData.GTCustomerMain != null ? this.ticketData.GTCustomerMain[0].FirstName : '') + ' ' + (this.ticketData.GTCustomerMain != null ? this.ticketData.GTCustomerMain[0].LastName : ''),
                    address: (this.ticketData.AddressDetail != null ? this.ticketData.AddressDetail[0].AddressLine1 : '') + ' - ' +
                        (this.ticketData.AddressDetail != null ? this.ticketData.AddressDetail[0].AddressLine2 : '') + ', ' +
                        (this.ticketData.AddressDetail != null ? this.ticketData.AddressDetail[0].City : '') + ', ' +
                        (this.ticketData.AddressDetail != null ? this.ticketData.AddressDetail[0].States : '') + ', ' +
                        (this.ticketData.AddressDetail != null ? this.ticketData.AddressDetail[0].Country : '') + ', ',
                    phone: this.ticketData.Events != null ? this.ticketData.Events[0].ContactNumber : '',
                    email: this.ticketData.GTCustomerMain != null ? this.ticketData.GTCustomerMain[0].Email : '',
                    cmpname: this.ticketData.Events != null ? this.ticketData.Events[0].ProviderName : '',
                    zip: this.ticketData.AddressDetail != null ? this.ticketData.AddressDetail[0].AddressLine2 : '',
                    city: this.ticketData.AddressDetail != null ? this.ticketData.AddressDetail[0].City : '',
                    state: this.ticketData.AddressDetail != null ? this.ticketData.AddressDetail[0].States : '',
                    country: this.ticketData.AddressDetail != null ? this.ticketData.AddressDetail[0].Country : '',
                    firstName: this.ticketData.GTCustomerMain != null ? this.ticketData.GTCustomerMain[0].FirstName : '',
                    lastName: this.ticketData.GTCustomerMain != null ? this.ticketData.GTCustomerMain[0].LastName : '',
                    password: this.ticketData.GTCustomerMain != null ? this.ticketData.GTCustomerMain[0].Password : '',
                    confirmPassword: '',
                }

                if (this.ticketData.Order != null) {
                    if (this.ticketData.Order.length > 0) {
                        for (let i = 0; i < this.ticketData.Order.length; i++) {
                            if (this.ticketData.OrderDetail != null) {
                                for (let j = 0; j < this.ticketData.OrderDetail.length; j++) {
                                    if (this.ticketData.OrderDetail[j].OrderRowId == this.ticketData.Order[i].OrderRowId) {
                                        let ticket = {
                                            no: this.ticketData.Order[i].OrderId,
                                            date: this.ticketData.Order[i].Created,
                                            eventname: this.ticketData.OrderDetail[j].EventName,
                                            qty: this.ticketData.OrderDetail[j].Qty,
                                            price: this.ticketData.OrderDetail[j].RegularPrice,
                                            fee: this.ticketData.OrderDetail[j].ServiceFee,
                                            discount: this.ticketData.OrderDetail[j].Discount,
                                            total: (this.ticketData.OrderDetail[j].RegularPrice + this.ticketData.OrderDetail[j].ServiceFee - this.ticketData.OrderDetail[j].Discount) 
                                        }
                                        this.ticket.push(ticket);
                                    }
                                }
                            }
                        }
                    }
                }
            },
            (error) => {
                this.errorMsg = error._body;
                setTimeout(function () {
                    this.errorMsg = '';
                }.bind(this), 5000);
            });
    }

    logout() {
        localStorage.setItem('login', 'false');
        this.router.navigate(['/']);
    }

    pastEvents() {
        this.eventData = this.ticketData.Events != null ? this.ticketData.Events : [];
    }

    profileChange() {
        this.cService.changeProfileDetails(this.profileData)
            .subscribe(
            data => {
                this.successMsg = data;
                console.log(data)
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
}



