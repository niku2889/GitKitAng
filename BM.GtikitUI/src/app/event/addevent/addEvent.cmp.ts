import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { EventService } from '../event.service';

@Component({
    selector: 'app-add-event',
    templateUrl: './addEvent.cmp.html',
    providers: [EventService]
})
export class AddEventComponent implements OnInit {
    eventModel: any = {};
    locationModel: any = {};
    dateModel: any = {};
    occurModel: any = {};
    timeZoneModel: any = {};
    freeModel: any = {};
    paidModel: any = {};
    ticketData: any[] = [];
    successMsg: string = '';
    errorMsg: string = '';
    
    isSectionHide1: boolean = true;
    isSectionHide2: boolean = false;
    isSectionHide3: boolean = false;
    isSectionHide4: boolean = false;
    isFreeTicket: boolean = false;
    isPaidTicket: boolean = false;

    constructor(
        private router: Router,
        public toastr: ToastsManager,
        vcr: ViewContainerRef,
        private eService: EventService) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.eventModel.eventType = '';
        this.locationModel.location = '';
        this.locationModel.country = '';
        this.occurModel.dayOccur = '0';
        this.occurModel.eventOccur = 'days';
        this.timeZoneModel.timeZone = 'Pacific/Pago_Pago';
    }

    addEvent() {
        this.setDivHideShow(false, true, false, false);
    }

    addLocation() {
        this.setDivHideShow(false, false, true, false);
    }

    addDate() {
        this.setDivHideShow(false, false, false, true);
    }

    addEventOccur() {
    }

    backMenu1() {
        this.setDivHideShow(true, false, false, false);
    }
    backMenu2() {
        this.setDivHideShow(false, true, false, false);
    }

    setDivHideShow(sec1: boolean, sec2: boolean, sec3: boolean, sec4: boolean) {
        this.isSectionHide1 = sec1;
        this.isSectionHide2 = sec2;
        this.isSectionHide3 = sec3;
        this.isSectionHide4 = sec4;
    }

    freeTicket() {
        this.paidModel = {};
        this.setTicketDiveHideShow(true, false);
    }
    paidTicket() {
        this.freeModel = {};
        this.setTicketDiveHideShow(false, true);
    }
    addFreeTicket() {
        this.freeModel.price = 0;
        this.freeModel.type = "0";
        this.ticketData.push(this.freeModel);
        this.freeModel = {};
    }
    addPaidTicket() {
        this.freeModel.type = "1";
        this.ticketData.push(this.paidModel);
        this.paidModel = {};
    }
    deleteTicket(index) {
        this.ticketData.splice(index, 1);
    }
    setTicketDiveHideShow(free: boolean, paid: boolean) {
        this.isFreeTicket = free;
        this.isPaidTicket = paid;
    }

    SaveEvent() {
        let tData:any[] = [];
        for (let i = 0; i < this.ticketData.length; i++) {
            const ticket = JSON.stringify({
                "EventTicketId": 0,
                "ProviderEventId": 0,
                "TicketType": this.ticketData[i].type,
                "TicketStatus": this.ticketData[i].ticketName,
                "TicketQty": this.ticketData[i].quantity,
                "TicketPrice": this.ticketData[i].price,
                "TicketDiscount": this.ticketData[i].perOrder,
                "IsActive": true
            });
            tData.push(ticket);
        }
        this.eService.saveEvent(this.eventModel, this.locationModel, this.dateModel, this.occurModel, this.timeZoneModel, tData)
            .subscribe(
            data => {
                this.successMsg = data;
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



