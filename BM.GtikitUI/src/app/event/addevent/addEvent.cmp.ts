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
        console.log(this.eventModel);
        this.setDivHideShow(false, true, false, false);
    }

    addLocation() {
        console.log(this.locationModel);
        this.setDivHideShow(false, false, true, false);
    }

    addDate() {
        console.log(this.dateModel);
        this.setDivHideShow(false, false, false, true);
    }

    addEventOccur() {
        console.log(this.occurModel);
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
        console.log(this.freeModel);
        this.freeModel.price = 0;
        this.freeModel.type = "0";
        this.ticketData.push(this.freeModel);
        this.freeModel = {};
    }
    addPaidTicket() {
        console.log(this.paidModel);
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
        console.log(this.ticketData);
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
            console.log(ticket);
            tData.push(ticket);
            console.log(tData);
        }
        this.eService.saveEvent(this.eventModel, this.locationModel, this.dateModel, this.occurModel, this.timeZoneModel, tData)
            .subscribe(
            data => {
                this.toastr.success('You are awesome!', 'Success!');
            },
            error => {
                console.log(error);
            });
    }
}



