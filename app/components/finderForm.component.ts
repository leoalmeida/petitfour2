/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {VerbsService} from "../services/verbs.service";
import {VerbDefinition, VerbTraductionDefinition, VerbPopulairesDefinition} from "../models/verb.model";
import { JSONP_PROVIDERS }  from '@angular/http';
import {VerbsTraductionService} from "../services/verbstraduction.service";
import {VerbsPopulairesService} from "../services/verbspopulaires.service";
import {VerbFilterPipe} from "../filters/verb-filter.pipe";

@Component({
    selector: 'finder',
    templateUrl: 'app/templates/finderform.html',
    //styleUrls: ['app/stylesheets/finderform.css'],
    directives: [CORE_DIRECTIVES],
    providers:  [JSONP_PROVIDERS, VerbsService, VerbsPopulairesService, VerbsTraductionService],
    pipes: [VerbFilterPipe]
})
export class FinderFormComponent implements OnInit {
    constructor (private verbsService: VerbsService,
                 private verbsPopulaires: VerbsPopulairesService,
                 private verbsTraduires: VerbsTraductionService) {
        this.popseulement = true;
    }

    errorMessage: string;
    verbs: VerbDefinition[];
    traduires: VerbTraductionDefinition[];
    populaires: string[];
    randomVerb: string;
    randomVerbDef: VerbDefinition;

    popseulement: boolean;

    ngOnInit() { this.getAllVerbs(); }

    getAllVerbs() {
        this.verbsService.getVerbs()
            .subscribe(
                verbsList => this.verbs = verbsList,
                error =>  this.errorMessage = <any>error);
        this.verbsPopulaires.getPopulaires()
            .subscribe(
                verbsList => this.populaires = verbsList.verbes.reverse(),
                error =>  this.errorMessage = <any>error);
        this.verbsTraduires.getTraductions()
            .subscribe(
                verbsList => this.traduires = verbsList,
                error =>  this.errorMessage = <any>error);
    }

    getRandomVerb() {
        if (this.popseulement) {
            this.randomVerb = this.populaires[Math.floor(Math.random() * this.populaires.length)];
            //this.find(this.verbs, this.randomVerb).then(item => this.randomVerbDef = item);
            this.verbs = this.verbs.filter(
                (item, index) => (!item.verbe.indexOf(this.randomVerb)));
        }else{
            this.randomVerbDef = this.verbs[Math.floor(Math.random() * this.verbs.length)];
        }
    }

    addVerbs (newVerb: VerbDefinition) {
        if (!newVerb) {return;}
        this.verbsService.addVerb(newVerb)
            .subscribe(
                addedverb  => this.verbs.push(addedverb),
                error =>  this.errorMessage = <any>error);
    }

    /*find (verbList: VerbDefinition[], toBeFound: string): VerbDefinition{
        for(let item in verbList){
            if (item.verbe.indexOf(toBeFound)) return item;
        }
    }*/
}