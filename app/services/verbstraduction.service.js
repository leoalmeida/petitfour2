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
 * Created by LeonardoAlmeida on 18/05/16.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do'); // debug
require('rxjs/add/operator/catch');
//import {AngularIndexedDB} from './AngularIndexedDB.service';
var VerbsTraductionService = (function () {
    function VerbsTraductionService(http) {
        this.http = http;
        this.verbsUrl = 'app/data/verbsTraduction.json'; // JSON
    }
    VerbsTraductionService.prototype.getTraductions = function () {
        this.response = this.http.get(this.verbsUrl);
        return this.response.map(this.extractData).catch(this.handleError);
    };
    VerbsTraductionService.prototype.getVerbTraduction = function () {
        this.verbs = this.http.get(this.verbsUrl)
            .map(this.extractData)
            .catch(this.handleError);
        return this.verbs[0];
    };
    VerbsTraductionService.prototype.addVerbTraduction = function (newVerb) {
        return this.verbs[0];
    };
    VerbsTraductionService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        return body.data || {};
    };
    VerbsTraductionService.prototype.handleError = function (error) {
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    VerbsTraductionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VerbsTraductionService);
    return VerbsTraductionService;
}());
exports.VerbsTraductionService = VerbsTraductionService;
//# sourceMappingURL=verbstraduction.service.js.map