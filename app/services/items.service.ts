import { Injectable } from '@angular/core';
import { GameDefinition } from "../models/game.model";
import { Http, URLSearchParams, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ItemsService {
    static nextItemId = 100;

    constructor(private http: Http) {}

    getAllItems(definition: string): Observable<GameDefinition[]> {

        let itemsUrl = 'app/data/'+ definition +'.json';

        return this.http.get(itemsUrl)
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
        let errMsg = error.statusText || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}