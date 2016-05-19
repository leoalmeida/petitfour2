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

import {VerbDefinition, VerbTraductionDefinition} from "../models/verb.model";
//import {AngularIndexedDB} from './AngularIndexedDB.service';

@Injectable()
export class VerbsTraductionService {
    public verbs: Observable<VerbTraductionDefinition[]>;
    public response: Observable<Response>;

    constructor (private http: Http) {}

    private verbsUrl = 'app/data/verbsTraduction.json';  // JSON

    getTraductions(): Observable<VerbTraductionDefinition[]>{
        this.response =  this.http.get(this.verbsUrl);

        return this.response.map(this.extractData).catch(this.handleError);
    }

    getVerbTraduction(): Observable<VerbTraductionDefinition> {

        this.verbs = this.http.get(this.verbsUrl)
            .map(this.extractData)
            .catch(this.handleError);

        return this.verbs[0];
    }

    addVerbTraduction(newVerb: VerbTraductionDefinition): Observable<VerbTraductionDefinition> {
        return this.verbs[0];
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