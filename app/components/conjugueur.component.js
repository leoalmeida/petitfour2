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
 * Created by LeonardoAlmeida on 07/05/16.
 */
var core_1 = require('@angular/core');
//import { JSONP_PROVIDERS }      from '@angular/http';
//import {ConfigFormComponent} from "./finderForm.component";
var gameContainer_component_1 = require("./gameContainer.component");
var mainPage_component_1 = require("./mainPage.component");
//import { provide }              from '@angular/core';
//import { XHRBackend, HTTP_PROVIDERS }           from '@angular/http';
//import { InMemoryBackendService,  SEED_DATA }   from 'angular2-in-memory-web-api/core';
//import {VerbsData} from "../data/verbs-data";
var ConjugueurComponent = (function () {
    function ConjugueurComponent() {
        this.startgame = false;
    }
    ConjugueurComponent.prototype.gotoMenu = function () {
        this.startgame = false;
    };
    ConjugueurComponent.prototype.startGame = function () {
        this.gonext = !this.gonext;
        if (!this.startgame)
            this.startgame = true;
    };
    ConjugueurComponent = __decorate([
        core_1.Component({
            selector: 'main-app',
            templateUrl: 'app/templates/conjugueur.html',
            styleUrls: ['app/stylesheets/conjugueur.css'],
            directives: [mainPage_component_1.MainPageComponent, gameContainer_component_1.GameContainerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ConjugueurComponent);
    return ConjugueurComponent;
}());
exports.ConjugueurComponent = ConjugueurComponent;
//# sourceMappingURL=conjugueur.component.js.map