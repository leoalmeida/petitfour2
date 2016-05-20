/**
 * Created by LeonardoAlmeida on 07/05/16.
 */
import { Component, OnInit}            from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
//import { JSONP_PROVIDERS }      from '@angular/http';
//import {ConfigFormComponent} from "./finderForm.component";
import {GameContainerComponent} from "./gameContainer.component";
import {MainPageComponent} from "./mainPage.component";

//import { provide }              from '@angular/core';
//import { XHRBackend, HTTP_PROVIDERS }           from '@angular/http';
//import { InMemoryBackendService,  SEED_DATA }   from 'angular2-in-memory-web-api/core';
//import {VerbsData} from "../data/verbs-data";


@Component({
    selector: 'main-app',
    templateUrl: 'app/templates/conjugueur.html',
    styleUrls: ['app/stylesheets/conjugueur.css'],
    directives: [MainPageComponent, GameContainerComponent]
})
export class ConjugueurComponent{
    startgame: boolean;
    gonext: boolean;
    constructor(){
        this.startgame = false;
    }

    gotoMenu() {
        this.startgame = false;
    }

    startGame(){
        this.gonext = !this.gonext;
        if (!this.startgame) this.startgame = true;
    }

}