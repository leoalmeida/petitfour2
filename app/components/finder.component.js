System.register(['@angular/core', "./finderGame.component"], function(exports_1, context_1) {
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
    var core_1, finderGame_component_1;
    var FinderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (finderGame_component_1_1) {
                finderGame_component_1 = finderGame_component_1_1;
            }],
        execute: function() {
            //import { provide }              from '@angular/core';
            //import { XHRBackend, HTTP_PROVIDERS }           from '@angular/http';
            //import { InMemoryBackendService,  SEED_DATA }   from 'angular2-in-memory-web-api/core';
            //import {VerbsData} from "../data/verbs-data";
            FinderComponent = (function () {
                function FinderComponent() {
                }
                FinderComponent = __decorate([
                    core_1.Component({
                        selector: 'finder',
                        template: "\n            <div class=\"panel panel-success round\">\n                <finder-form></finder-form>\n                \n                <div class=\"footer\">\n                    <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n                </div>\n            </div>\n    ",
                        directives: [finderGame_component_1.FinderGameComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FinderComponent);
                return FinderComponent;
            }());
            exports_1("FinderComponent", FinderComponent);
        }
    }
});

//# sourceMappingURL=finder.component.js.map
