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
            "Address": location.vanueName + ' ' + location.address1 + ' ' + location.address2 + ' ' + location.city + ' ' + location.state + ' ' + location.zipCode + ' ' + location.country,
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
        headers.append('Access-Control-Allow-Origin', '*');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.API_ENDPOINT + 'GTIKIT/GTCustomer/GTEvents', body, options)
            .map((response: Response) => response.json());
    }

    private handleError(error: any) {
        return Observable.throw(error.json());
    }
}
