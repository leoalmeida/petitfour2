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
var common_1 = require('@angular/common');
var verbs_service_1 = require("../services/verbs.service");
var http_1 = require('@angular/http');
var FinderFormComponent = (function () {
    function FinderFormComponent(verbsService) {
        this.verbsService = verbsService;
    }
    FinderFormComponent.prototype.ngOnInit = function () { this.getAllVerbs(); };
    FinderFormComponent.prototype.getAllVerbs = function () {
        var _this = this;
        this.verbsService.getVerbs()
            .subscribe(function (verbsList) { return _this.verbs = verbsList; }, function (error) { return _this.errorMessage = error; });
    };
    FinderFormComponent.prototype.getRandomVerb = function () {
        this.randomVerb = this.verbs[Math.floor(Math.random() * this.verbs.length)];
    };
    FinderFormComponent.prototype.addVerbs = function (newVerb) {
        var _this = this;
        if (!newVerb) {
            return;
        }
        this.verbsService.addVerb(newVerb)
            .subscribe(function (addedverb) { return _this.verbs.push(addedverb); }, function (error) { return _this.errorMessage = error; });
    };
    FinderFormComponent = __decorate([
        core_1.Component({
            selector: 'finder',
            templateUrl: 'app/templates/finderform.html',
            //styleUrls: ['app/stylesheets/finderform.css'],
            directives: [common_1.CORE_DIRECTIVES],
            providers: [http_1.JSONP_PROVIDERS, verbs_service_1.VerbsService]
        }), 
        __metadata('design:paramtypes', [verbs_service_1.VerbsService])
    ], FinderFormComponent);
    return FinderFormComponent;
}());
exports.FinderFormComponent = FinderFormComponent;

//# sourceMappingURL=finderForm.component.js.map
