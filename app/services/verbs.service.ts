import { Injectable }     from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/operator/catch';

import {VerbDefinition} from "../models/verb.model";
import {GenerateObservable} from "rxjs/observable/GenerateObservable";
import {AngularIndexedDB} from './AngularIndexedDB.service';

@Injectable()
export class VerbsService {
    public verbs: Observable<VerbDefinition[]>;
    public response: Observable<Response>;

    //private db: AngularIndexedDB;

    constructor (private http: Http) {
        /*this.db = new AngularIndexedDB('verbsDb', 1);
        this.db.createStore(1, (evt) => {
            let objectStore = evt.currentTarget.result.createObjectStore(
                'verbs', { keyPath: "id", autoIncrement: true });
            objectStore.createIndex("infinitive", "infinitive", { unique: false });
        });*/
    }

    //private verbsUrl = 'app/data/verbs';  // URL to web api
    //private randomVerbsUrl = 'verbs';  // URL to web api
    private verbsUrl = 'app/data/verbs-teste.json';  // JSON

    getVerbs(): Observable<VerbDefinition[]>{
        /*this.db.getAll('verbs').then((verbs) => {
            console.log(verbs);
        }, (error) => {
            console.log(error);
        });*/

        this.response =  this.http.get(this.verbsUrl);
            //.map(this.extractData)
            //.catch(this.handleError);

        return this.response.map(this.extractData).catch(this.handleError);
    }

    getVerb(): Observable<VerbDefinition> {

        this.verbs = this.http.get(this.verbsUrl)
            .map(this.extractData)
            .catch(this.handleError);

        return this.verbs[0];
    }

    addVerb(newVerb: VerbDefinition): Observable<VerbDefinition> {
        /*this.db.add('verbs', { "infinitive": '', family: 'email' },"id").then(() => {

        }, (error) => {
            console.log(error);
        });*/
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
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}