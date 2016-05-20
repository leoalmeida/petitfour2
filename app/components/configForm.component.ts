/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {VerbsService} from "../services/verbs.service";
import {VerbDefinition, VerbeTraduiresDefinition} from "../models/verb.model";
import { JSONP_PROVIDERS }  from '@angular/http';
import {VerbsTraduireService} from "../services/verbstraduire.service";
import {VerbFilterPipe} from "../filters/verb-filter.pipe";

@Component({
    selector: 'finder',
    templateUrl: 'app/templates/configform.html',
    //styleUrls: ['app/stylesheets/configform.css'],
    directives: [CORE_DIRECTIVES],
    providers:  [JSONP_PROVIDERS, VerbsService, VerbsTraduireService],
    pipes: [VerbFilterPipe]
})
export class ConfigFormComponent implements OnInit {
    constructor (private verbsService: VerbsService,
                 private verbsTraduires: VerbsTraduireService) {
        this.popseulement = true;
    }

    errorMessage: string;
    verbs: VerbDefinition[];
    traduires: VerbeTraduiresDefinition[];
    randomVerb: VerbeTraduiresDefinition;
    randomVerbDef: VerbDefinition;

    popseulement: boolean;

    ngOnInit() { this.getAllVerbs(); }

    getAllVerbs() {
        this.verbsService.getVerbs()
            .subscribe(
                verbsList => this.verbs = verbsList,
                error =>  this.errorMessage = <any>error);
        this.verbsTraduires.getTraductions()
            .subscribe(
                verbsList => this.traduires = verbsList,
                error =>  this.errorMessage = <any>error);
    }

    getRandomVerb() {
        if (this.popseulement) {
            this.randomVerb = this.traduires[Math.floor(Math.random() * this.traduires.length)];
            //this.find(this.verbs, this.randomVerb).then(item => this.randomVerbDef = item);
            this.verbs = this.verbs.filter(
                (item, index) => (!item.verbe.indexOf(this.randomVerb.verbe)));
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