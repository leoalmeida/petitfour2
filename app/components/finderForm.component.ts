/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {VerbsService} from "../services/verbs.service";
import {VerbDefinition} from "../models/verb.model";
import { JSONP_PROVIDERS }  from '@angular/http';

@Component({
    selector: 'finder',
    templateUrl: 'app/templates/finderform.html',
    //styleUrls: ['app/stylesheets/finderform.css'],
    directives: [CORE_DIRECTIVES],
    providers:  [JSONP_PROVIDERS, VerbsService]
})
export class FinderFormComponent implements OnInit {
    constructor (private verbsService: VerbsService) {}

    errorMessage: string;
    verbs: VerbDefinition[];
    randomVerb: VerbDefinition;

    ngOnInit() { this.getAllVerbs(); }

    getAllVerbs() {
        this.verbsService.getVerbs()
            .subscribe(
                verbsList => this.verbs = verbsList,
                error =>  this.errorMessage = <any>error);
    }

    getRandomVerb() {
        this.randomVerb = this.verbs[Math.floor(Math.random() * this.verbs.length)];
    }

    addVerbs (newVerb: VerbDefinition) {
        if (!newVerb) {return;}
        this.verbsService.addVerb(newVerb)
            .subscribe(
                addedverb  => this.verbs.push(addedverb),
                error =>  this.errorMessage = <any>error);
    }
}