/**
 * Created by LeonardoAlmeida on 20/05/16.
 */
/**
 * Created by LeonardoAlmeida on 07/05/16.
 */
import { Component, OnInit}            from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
//import { JSONP_PROVIDERS }      from '@angular/http';
//import {VerbsService} from "../services/verbs.service";
//import {ConfigFormComponent} from "./finderForm.component";
import {ROUTER_DIRECTIVES, OnActivate, RouteSegment, Router, RouteTree} from '@angular/router';
import {GameContainerComponent} from "./gameContainer.component.ts";
import {MenuService} from "../services/menu.service";
import {GameDefinition} from "../models/game.model";

//import { provide }              from '@angular/core';
//import { XHRBackend, HTTP_PROVIDERS }           from '@angular/http';
//import { InMemoryBackendService,  SEED_DATA }   from 'angular2-in-memory-web-api/core';
//import {VerbsData} from "../data/verbs-data";


@Component({
    selector: 'main-form',
    templateUrl: 'app/templates/mainPage.html',
    styleUrls: ['app/stylesheets/conjugueur.css']
})
export class MainPageComponent{

    games: GameDefinition[];

    private selectedGameId: number;

    constructor(){}

    /* routerOnActivate(curr: RouteSegment, prev?: RouteSegment, currTree?: RouteTree, prevTree?: RouteTree): void  {
     this.selectedGameId = +curr.getParam('gameID');
     this.service.getAllMenuItems().subscribe(games => this.games = games);
     console.log('CurrPage: ', curr.getParam('gameID'));
     }
     */
    isSelected(game: GameDefinition) { return game.id === this.selectedGameId; }

    onSelect(selectedGame: GameDefinition) {
        //this.router.navigate(['/jeux', selectedGame.id]);
    }

}