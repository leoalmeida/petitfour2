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
 * Created by LeonardoAlmeida on 02/05/16.
 */
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var http_1 = require('@angular/http');
require('rxjs/add/observable/throw');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/map');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/do'); // debug
require('rxjs/add/operator/catch');
var items_service_1 = require("../services/items.service");
var HomeComponent = (function () {
    function HomeComponent(service, router) {
        this.service = service;
        this.router = router;
        this.showSearch = false;
        this.searchText = new common_1.Control('');
        this.searchTermStream = new Subject_1.Subject();
    }
    HomeComponent.prototype.search = function (searchText) { this.searchTermStream.next(searchText); };
    HomeComponent.prototype.toggle = function () { this.showSearch = !this.showSearch; };
    HomeComponent.prototype.goExternal = function (link) { window.location.href = link; };
    HomeComponent.prototype.routerOnActivate = function (curr, prev, currTree) {
        this.currSegment = curr;
        this.selectedId = +currTree.parent(curr).getParam('id');
        //this.service.getAllItems().then(list => this.list = list);
    };
    HomeComponent.prototype.getAllMenuItems = function () {
        var _this = this;
        this.service.getAllItems("menu")
            .subscribe(function (menuItems) { return _this.list = menuItems; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.onSelect = function (game) {
        var teste = true;
        if (teste) {
            this.goExternal(game.routeLink);
        }
        else {
            this.router.navigate([("./" + game.routeLink)], this.currSegment);
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getAllMenuItems();
        //this.service.search("");
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'painel',
            templateUrl: 'app/templates/home.html',
            styleUrls: ['app/stylesheets/home.css'],
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            providers: [http_1.JSONP_PROVIDERS, items_service_1.ItemsService]
        }), 
        __metadata('design:paramtypes', [items_service_1.ItemsService, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map