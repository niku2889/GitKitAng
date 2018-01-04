import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { User } from '../models/user';

@Injectable()
export class EventService {
    API_ENDPOINT: string = "http://70.35.198.86/GTIKITappLayer/";
    constructor(private http: Http) { }

    saveEvent(event: any, location: any, date: any, occur: any, timezone: any, tickit: any) {
        console.log(date);
        console.log(tickit)
        const body = JSON.stringify({
            "ProviderEventId": 0,
            "ProviderId": 1,
            "CategoryId": event.eventType,
            "EventName": event.eventTitle,
            "PlaceId": location.location,
            "WebSite": "www.gtikit.com",
            "Email": "testmail@gmail.com",
            "ContactName": "Test Name",
            "ContactNumber": "1234567891",
            "IsFreeEvent": true,
            "Address": location == undefined ? '' : (location.vanueName == undefined ? '' : location.vanueName) + ' ' +
                (location.address1 == undefined ? '' : location.address1) + ' ' +
                (location.address2 == undefined ? '' : location.address2) + ' ' +
                (location.city == undefined ? '' : location.city) + ' ' +
                (location.state == undefined ? '' : location.state) + ' ' +
                (location.zipCode == undefined ? '' : location.zipCode) + ' ' +
                (location.country == undefined ? '' : location.country),
            "IsActive": true,
            "EventStartDateTime": date.startEndDate[0],
            "EventEndDateTime": date.startEndDate[1],
            "Language": "English",
            "EventImage1": "test.jpg",
            "EventImage2": "123.jpg",
            "EventImage3": "123.jpg",
            "EventImage4": "",
            "EventImage5": "",
            "ImageCategoryId": 1,
            "EventTicketRate": tickit
        });
        console.log(body)
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.API_ENDPOINT + 'GTIKIT/GTCustomer/GTEvents', body, options)
            .map((response: Response) => response.json());
    }

    getEventDetails(id: any) {
        return this.http.get(this.API_ENDPOINT + 'GTEvent/' + id)
            .map((response: Response) => response.json());
    }

    GetAllEvents() {
        return this.http.get(this.API_ENDPOINT + 'GTEvent')
            .map((response: Response) => response.json());
    }

    addEventAddress(location: any) {
        const body = JSON.stringify({
            "AddressLine1": (location.address1 == undefined ? '' : location.address1),
            "AddressLine2": (location.address2 == undefined ? '' : location.address2),
            "City": (location.city == undefined ? '' : location.city),
            "CountryID": (location.country == undefined ? '' : location.country),
            "FaxNo": "123456",
            "IsActive": true,
            "IsDelete": false,
            "PhoneNo": "1234567891",
            "PinCode": (location.zipCode == undefined ? '' : location.zipCode),
            "PlaceDetailName": location == undefined ? '' : (location.vanueName == undefined ? '' : location.vanueName),
            "PlaceGroupId": 1,
            "PlaceId": location.location,
            "State": (location.state == undefined ? '' : location.state),
            "WebSite": "www.gtikit.com"
        });
        console.log(body)
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.API_ENDPOINT + 'GTIKIT/GTCustomer/GTEventPlace/Addresses', body, options)
            .map((response: Response) => response.json());
    }

    getEventAddress(eventid: any) {
        return this.http.get(this.API_ENDPOINT + 'GTIKIT/GTCustomer/EventPlaceAddress/' + eventid)
            .map((response: Response) => response.json());
    }
    
    private handleError(error: any) {
        return Observable.throw(error.json());
    }
}
