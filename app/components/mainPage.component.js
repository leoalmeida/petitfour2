"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by LeonardoAlmeida on 20/05/16.
 */
/**
 * Created by LeonardoAlmeida on 07/05/16.
 */
var core_1 = require('@angular/core');
//import { provide }              from '@angular/core';
//import { XHRBackend, HTTP_PROVIDERS }           from '@angular/http';
//import { InMemoryBackendService,  SEED_DATA }   from 'angular2-in-memory-web-api/core';
//import {VerbsData} from "../data/verbs-data";
var MainPageComponent = (function () {
    function MainPageComponent() {
    }
    /* routerOnActivate(curr: RouteSegment, prev?: RouteSegment, currTree?: RouteTree, prevTree?: RouteTree): void  {
     this.selectedGameId = +curr.getParam('gameID');
     this.service.getAllMenuItems().subscribe(games => this.games = games);
     console.log('CurrPage: ', curr.getParam('gameID'));
     }
     */
    MainPageComponent.prototype.isSelected = function (game) { return game.id === this.selectedGameId; };
    MainPageComponent.prototype.onSelect = function (selectedGame) {
        //this.router.navigate(['/jeux', selectedGame.id]);
    };
    MainPageComponent = __decorate([
        core_1.Component({
            selector: 'main-form',
            templateUrl: 'app/templates/mainPage.html',
            styleUrls: ['app/stylesheets/conjugueur.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MainPageComponent);
    return MainPageComponent;
}());
exports.MainPageComponent = MainPageComponent;
//# sourceMappingURL=mainPage.component.js.map