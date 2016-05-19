/**
 * Created by LeonardoAlmeida on 07/05/16.
 */
import { Component, OnInit}            from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
//import { JSONP_PROVIDERS }      from '@angular/http';
//import {VerbsService} from "../services/verbs.service";
//import {FinderFormComponent} from "./finderForm.component";
import {ROUTER_DIRECTIVES, OnActivate, RouteSegment, Router, RouteTree} from '@angular/router';
import {FinderGameComponent} from "./finderGame.component";
import {MenuService} from "../services/menu.service";
import {GameDefinition} from "../models/game.model";

//import { provide }              from '@angular/core';
//import { XHRBackend, HTTP_PROVIDERS }           from '@angular/http';
//import { InMemoryBackendService,  SEED_DATA }   from 'angular2-in-memory-web-api/core';
//import {VerbsData} from "../data/verbs-data";


@Component({
    selector: 'jeux',
    template: `
            <finder-form></finder-form>
            <div class="jumbotron">
                <section class="main clearfix">
                    <div class="fleft">
                        <h3>Votre jeu pour apprendre le français!</h3>
                        <p>Sélectionnez le jeu souhaité dans le menu ci-dessous:</p>
                    </div>
                </section>
                <div class="list-groupt">
                    <a *ngFor="let game of games"
                       class="list-group-item list-group-item-info text-center"
                       [class.selected]="isSelected(game)"
                       (click)="onSelect(game)">
                        <div class="media-left">
                            <img class="img-responsive" src="{{game.imglink}}" alt="{{game.nome}}">
                        </div>
                        <div class="media-body">
                            <h2 class="list-group-item-heading">{{game.name}}</h2>
                        </div>
                    </a>
                </div>
            </div>
    `,
    styleUrls: ['app/stylesheets/start.css'],
    directives: [FinderGameComponent, MenuService],
    providers: [ROUTER_PROVIDERS]
})
export class FinderComponent implements OnActivate{

    games: GameDefinition[];

    private selectedGameId: number;

    constructor(private service: MenuService,
                private router: Router){}

    routerOnActivate(curr: RouteSegment, prev?: RouteSegment, currTree?: RouteTree, prevTree?: RouteTree): void  {
        this.selectedGameId = +curr.getParam('gameID');
        this.service.getAllMenuItems().subscribe(games => this.games = games);
        console.log('CurrPage: ', curr.getParam('gameID'));
    }

    isSelected(game: GameDefinition) { return game.id === this.selectedGameId; }

    onSelect(selectedGame: GameDefinition) {
        this.router.navigate(['/jeux', selectedGame.id]);
    }

}