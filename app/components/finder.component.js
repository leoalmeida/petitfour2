System.register(['@angular/core', '@angular/router', "./finderGame.component", "../services/menu.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, finderGame_component_1, menu_service_1;
    var FinderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (finderGame_component_1_1) {
                finderGame_component_1 = finderGame_component_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            }],
        execute: function() {
            //import { provide }              from '@angular/core';
            //import { XHRBackend, HTTP_PROVIDERS }           from '@angular/http';
            //import { InMemoryBackendService,  SEED_DATA }   from 'angular2-in-memory-web-api/core';
            //import {VerbsData} from "../data/verbs-data";
            FinderComponent = (function () {
                function FinderComponent(service, router) {
                    this.service = service;
                    this.router = router;
                }
                FinderComponent.prototype.routerOnActivate = function (curr, prev, currTree, prevTree) {
                    var _this = this;
                    this.selectedGameId = +curr.getParam('gameID');
                    this.service.getAllMenuItems().subscribe(function (games) { return _this.games = games; });
                    console.log('CurrPage: ', curr.getParam('gameID'));
                };
                FinderComponent.prototype.isSelected = function (game) { return game.id === this.selectedGameId; };
                FinderComponent.prototype.onSelect = function (selectedGame) {
                    this.router.navigate(['/jeux', selectedGame.id]);
                };
                FinderComponent = __decorate([
                    core_1.Component({
                        selector: 'jeux',
                        template: "\n            <finder-form></finder-form>\n            <div class=\"jumbotron\">\n                <section class=\"main clearfix\">\n                    <div class=\"fleft\">\n                        <h3>Votre jeu pour apprendre le fran\u00E7ais!</h3>\n                        <p>S\u00E9lectionnez le jeu souhait\u00E9 dans le menu ci-dessous:</p>\n                    </div>\n                </section>\n                <div class=\"list-groupt\">\n                    <a *ngFor=\"let game of games\"\n                       class=\"list-group-item list-group-item-info text-center\"\n                       [class.selected]=\"isSelected(game)\"\n                       (click)=\"onSelect(game)\">\n                        <div class=\"media-left\">\n                            <img class=\"img-responsive\" src=\"{{game.imglink}}\" alt=\"{{game.nome}}\">\n                        </div>\n                        <div class=\"media-body\">\n                            <h2 class=\"list-group-item-heading\">{{game.name}}</h2>\n                        </div>\n                    </a>\n                </div>\n            </div>\n    ",
                        styleUrls: ['app/stylesheets/start.css'],
                        directives: [finderGame_component_1.FinderGameComponent],
                    }), 
                    __metadata('design:paramtypes', [menu_service_1.MenuService, router_1.Router])
                ], FinderComponent);
                return FinderComponent;
            }());
            exports_1("FinderComponent", FinderComponent);
        }
    }
});

//# sourceMappingURL=finder.component.js.map
