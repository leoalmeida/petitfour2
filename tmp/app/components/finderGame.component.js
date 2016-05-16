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
var router_1 = require('@angular/router');
var verbs_service_1 = require("../services/verbs.service");
var verb_model_1 = require("../models/verb.model");
var http_1 = require('@angular/http');
var menu_service_1 = require("../services/menu.service");
var FinderGameComponent = (function () {
    function FinderGameComponent(verbsService, router, menuService) {
        this.verbsService = verbsService;
        this.router = router;
        this.menuService = menuService;
        this.perfilRespostas = verb_model_1.VerbDefinition.newVerb();
        this.caixasResposta = verb_model_1.LetterBoxDefinition.newLetterBox();
        this.respostaErrada = false;
        this.faseCompleta = false;
        this.close = new core_1.EventEmitter();
    }
    FinderGameComponent.prototype.routerOnActivate = function (curr) {
        var _this = this;
        var id = +curr.getParam('gameID');
        this.menuService.getAllMenuItems()
            .subscribe(function (menuList) { return menuList.forEach(function (item, index) {
            if (item.id === id) {
                _this.game = item;
            }
        }); }, function (error) { return _this.errorMessage = error; });
    };
    FinderGameComponent.prototype.gotoMenu = function () {
        this.router.navigate(['/home']);
    };
    FinderGameComponent.prototype.rightanswer = function () {
        return (this.perfilRespostas.temps[this.randomTense].inflections[this.randomPronom].verbe === this.randomVerb.temps[this.randomTense].inflections[this.randomPronom].verbe);
    };
    FinderGameComponent.prototype.letraCerta = function (letraResposta) {
        return (this.perfilRespostas.temps[this.randomTense].inflections[this.randomPronom].verbe.split(''))[letraResposta];
    };
    FinderGameComponent.prototype.ngOnInit = function () {
        this.getAllVerbs();
    };
    FinderGameComponent.prototype.getAllVerbs = function () {
        var _this = this;
        this.verbsService.getVerbs()
            .subscribe(function (verbsList) { return _this.verbs = verbsList; }, function (error) { return _this.errorMessage = error; });
    };
    FinderGameComponent.prototype.getRandomVerb = function () {
        this.randomVerb = this.verbs[Math.floor(Math.random() * this.verbs.length)];
        this.randomTense = Math.floor(Math.random() * this.game.difficult);
        this.randomPronom = Math.floor(Math.random() * this.randomVerb.temps[this.randomTense].inflections.length);
        this.randomPronomText = this.randomVerb.temps[this.randomTense].inflections[this.randomPronom].pronom;
        this.perfilRespostas = verb_model_1.VerbDefinition.newVerb();
        this.perfilRespostas.verbe = FinderGameComponent.toCamel(this.randomVerb.verbe);
        this.perfilRespostas.translationPT = this.randomVerb.translationPT;
        this.perfilRespostas.temps[this.randomTense].inflection = this.randomVerb.temps[this.randomTense].inflection;
        this.perfilRespostas.temps[this.randomTense].mode = this.randomVerb.temps[this.randomTense].mode;
        this.caixasResposta = new verb_model_1.LetterBoxDefinition(this.randomVerb.temps[this.randomTense].inflections[this.randomPronom].verbe.toUpperCase().split(''), this.generateRandomLetters(this.randomVerb.temps[this.randomTense].inflections[this.randomPronom].verbe));
        this.faseCompleta = false;
    };
    FinderGameComponent.prototype.getNextVerb = function (pronom) {
        if (this.perfilRespostas.temps[this.randomTense].inflections[pronom].verbe == "") {
            this.caixasResposta = new verb_model_1.LetterBoxDefinition(this.randomVerb.temps[this.randomTense].inflections[pronom].verbe.toUpperCase().split(''), this.generateRandomLetters(this.randomVerb.temps[this.randomTense].inflections[pronom].verbe));
            this.faseCompleta = false;
            this.respostaErrada = false;
            this.randomPronom = pronom;
            this.randomPronomText = FinderGameComponent.toCamel(this.perfilRespostas.temps[this.randomTense].inflections[pronom].pronom);
        }
    };
    FinderGameComponent.prototype.generateRandomLetters = function (verb) {
        var text = verb.toUpperCase().split('');
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZÂÀÉÈÊÎÔÛÇ";
        for (var i = text.length; i < this.game.boardSize; i++)
            text.push(possible.charAt(Math.floor(Math.random() * possible.length)));
        return this.shuffle(text);
    };
    FinderGameComponent.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    FinderGameComponent.prototype.onSelect = function (indexLetraTentativa, resposta) {
        if (resposta) {
            for (var currentIndex = 0; currentIndex < this.caixasResposta.verbLetters.length; currentIndex++) {
                if (this.caixasResposta.answeredLetters[currentIndex] == "") {
                    this.caixasResposta.answeredLetters[currentIndex] = this.caixasResposta.listLetters[indexLetraTentativa];
                    this.caixasResposta.usedLetters[indexLetraTentativa] = true;
                    this.caixasResposta.answerLength++;
                    if (verb_model_1.LetterBoxDefinition.compare(this.caixasResposta.answeredLetters, this.caixasResposta.verbLetters))
                        this.completeThisFase();
                    else if (this.caixasResposta.answerLength >= this.caixasResposta.verbLetters.length)
                        this.respostaErrada = true;
                    return;
                }
            }
        }
        else {
            for (var currentIndex = 0; currentIndex < this.caixasResposta.listLetters.length; currentIndex++) {
                if ((this.caixasResposta.listLetters[currentIndex] == this.caixasResposta.answeredLetters[indexLetraTentativa])
                    && this.caixasResposta.usedLetters[currentIndex]) {
                    this.caixasResposta.answeredLetters[indexLetraTentativa] = "";
                    this.caixasResposta.usedLetters[currentIndex] = false;
                    this.caixasResposta.answerLength--;
                    this.respostaErrada = false;
                    return;
                }
            }
        }
    };
    FinderGameComponent.prototype.completeThisFase = function () {
        this.perfilRespostas.temps[this.randomTense].inflections[this.randomPronom].verbe = this.randomVerb.temps[this.randomTense].inflections[this.randomPronom].verbe;
        this.faseCompleta = true;
        this.showAlert();
    };
    FinderGameComponent.prototype.showAlert = function () {
        this.close.emit("success-alert");
    };
    FinderGameComponent.prototype.closeAlert = function (obj) {
        console.log("event caught" + obj.toString());
    };
    FinderGameComponent.toCamel = function (verbo) {
        return verbo.replace(/(\-[a-z])/g, function ($1) { return $1.toUpperCase().replace('-', ''); });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FinderGameComponent.prototype, "close", void 0);
    FinderGameComponent = __decorate([
        core_1.Component({
            selector: 'finder-form',
            templateUrl: 'app/templates/findergame.html',
            styleUrls: ['app/stylesheets/findergame.css'],
            directives: [common_1.CORE_DIRECTIVES],
            providers: [http_1.JSONP_PROVIDERS, verbs_service_1.VerbsService]
        }), 
        __metadata('design:paramtypes', [verbs_service_1.VerbsService, router_1.Router, menu_service_1.MenuService])
    ], FinderGameComponent);
    return FinderGameComponent;
}());
exports.FinderGameComponent = FinderGameComponent;

//# sourceMappingURL=finderGame.component.js.map
