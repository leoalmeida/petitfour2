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
var core_1 = require("@angular/core");
var gameContainer_component_1 = require("./gameContainer.component");
var mainPage_component_1 = require("./mainPage.component");
var facebook_service_1 = require("../services/facebook.service");
var ConjugueurComponent = (function () {
    function ConjugueurComponent(_ngZone, _facebookService) {
        this._ngZone = _ngZone;
        this._facebookService = _facebookService;
        this.name = "";
        this.isUser = false;
        this.startgame = false;
        this.ponctuation = 0;
        this.menuBarOpen = false;
    }
    ConjugueurComponent.prototype.ngOnInit = function () {
        this._facebookService.loadAndInitFBSDK();
    };
    ConjugueurComponent.prototype.login = function () {
        var self = this;
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                console.log('Logged in.');
            }
            else {
                FB.login(function () {
                    if (response.status === 'connected') {
                        console.log(response.authResponse.accessToken);
                        FB.api('/me', 'get', function (response) {
                            var _this = this;
                            self._ngZone.run(function () {
                                self.name = _this.response.name;
                                self.isUser = true;
                            });
                        });
                    }
                    else {
                        console.log('User cancelled login or did not fully authorize.');
                    }
                });
            }
        });
    };
    ConjugueurComponent.prototype.gotoMenu = function () {
        this.startgame = false;
    };
    ConjugueurComponent.prototype.startGame = function () {
        this.gonext = !this.gonext;
        if (!this.startgame)
            this.startgame = true;
    };
    ConjugueurComponent.prototype.toggle = function () {
        this.menuBarOpen = !this.menuBarOpen;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ConjugueurComponent.prototype, "ponctuation", void 0);
    ConjugueurComponent = __decorate([
        core_1.Component({
            selector: 'main-app',
            templateUrl: 'app/templates/conjugueur.html',
            styleUrls: ['app/stylesheets/conjugueur.css'],
            directives: [mainPage_component_1.MainPageComponent, gameContainer_component_1.GameContainerComponent],
            providers: [facebook_service_1.FacebookService]
        }), 
        __metadata('design:paramtypes', [core_1.NgZone, facebook_service_1.FacebookService])
    ], ConjugueurComponent);
    return ConjugueurComponent;
}());
exports.ConjugueurComponent = ConjugueurComponent;
//# sourceMappingURL=conjugueur.component.js.map