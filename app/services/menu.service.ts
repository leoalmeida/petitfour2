/**
 * Created by LeonardoAlmeida on 30/04/16.
 */
import { Injectable } from '@angular/core';
import { ItemDefinition } from "../models/item.model";
import { Http, URLSearchParams, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/operator/catch';

@Injectable()
export class MenuService {
    static nextMenuId = 100;
    constructor(private http: Http) {}

    private munuItemsUrl = 'data/menuitems.json';  // URL to web api

    getAllMenuItems(): Observable<ItemDefinition[]> {
        return this.http.get(this.munuItemsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}