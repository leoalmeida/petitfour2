/**
 * Created by LeonardoAlmeida on 18/05/16.
 */
/**
 * Created by LeonardoAlmeida on 18/05/16.
 */
import { Injectable }     from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/operator/catch';

import {VerbDefinition, VerbPopulairesDefinition} from "../models/verb.model";
//import {AngularIndexedDB} from './AngularIndexedDB.service';

@Injectable()
export class VerbsPopulairesService {
    public verbes: Observable<VerbPopulairesDefinition>;
    public response: Observable<Response>;

    //private db: AngularIndexedDB;

    constructor (private http: Http) {}

    private verbsUrl = 'app/data/verbsPlusPopulaires.json';  // JSON

    getPopulaires(): Observable<VerbPopulairesDefinition>{

        this.response =  this.http.get(this.verbsUrl);

        return this.response.map(this.extractData).catch(this.handleError);
    }

    getVerb(): Observable<VerbPopulairesDefinition> {

        this.verbes = this.http.get(this.verbsUrl)
            .map(this.extractData)
            .catch(this.handleError);

        return this.verbes[0];
    }

    addVerb(newVerb: VerbDefinition): Observable<VerbPopulairesDefinition> {
        return this.verbes[0];
    }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}