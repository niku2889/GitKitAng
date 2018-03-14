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
    ticketData: any[] = [];
    ticket: any[] = [];
    cols: any[];

    ngOnInit() {
        this.getTickets();
        this.cols = [
            { field: 'no', header: 'Sr No.', width: '13%' },
            { field: 'date', header: 'Date', width: '18%' },
            { field: 'eventname', header: 'Event Name', width: '16%' },
            { field: 'qty', header: 'Quantity', width: '15%' },
            { field: 'price', header: 'Price', width: '12%' },
            { field: 'fee', header: 'Fee', width: '12%' },
            { field: 'total', header: 'Total', width: '12%' }
        ];
    }

    constructor(
        private router: Router,
        private cService: CommonService) {
    }

    getTickets() {
        this.cService.getTickets()
            .subscribe((response) => {
                this.ticketData = response;
                for (let i = 0; i < this.ticketData.length; i++) {
                    if (this.ticketData[i].OrderDetail.length > 0) {
                        for (let j = 0; j < this.ticketData[i].OrderDetail.length; j++) {
                            let ticket = {
                                no: this.ticketData[i].OrderDetail[j].TicketRateId,
                                date: this.ticketData[i].Created,
                                eventname: this.ticketData[i].OrderDetail[j].EventName,
                                qty: this.ticketData[i].OrderDetail[j].Qty,
                                price: this.ticketData[i].OrderDetail[j].SubTotal,
                                fee: this.ticketData[i].OrderDetail[j].ServiceFee,
                                total: this.ticketData[i].OrderDetail[j].RegularPrice
                            }
                            this.ticket.push(ticket);
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
}



