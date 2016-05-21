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
var verb_model_1 = require("../models/verb.model");
var game_model_1 = require("../models/game.model");
var menu_service_1 = require("../services/menu.service");
var verbstraduire_service_1 = require("../services/verbstraduire.service");
var GameContainerComponent = (function () {
    function GameContainerComponent(verbsService, verbsTraduires, menuService) {
        this.verbsService = verbsService;
        this.verbsTraduires = verbsTraduires;
        this.menuService = menuService;
        this.game = game_model_1.GameDefinition.newGame();
        this.perfilRespostas = verb_model_1.VerbDefinition.newVerb();
        this.caixasResposta = verb_model_1.LetterBoxDefinition.newLetterBox();
        this.respostaErrada = false;
        this.faseCompleta = false;
        //this.close = new EventEmitter<string>();
        this.popseulement = true;
        this.gonext = false;
        this.getAllVerbs();
    }
    GameContainerComponent.prototype.routerOnActivate = function (curr) {
        var _this = this;
        var id = +curr.getParam('gameID');
        this.menuService.getAllMenuItems()
            .subscribe(function (menuList) { return menuList.forEach(function (item, index) {
            if (item.id === id) {
                _this.game = item;
            }
        }); }, function (error) { return _this.errorMessage = error; });
    };
    GameContainerComponent.prototype.rightanswer = function () {
        return (this.perfilRespostas.temps[this.randomTense].inflections[this.randomPronom].verbe === this.randomVerbDef.temps[this.randomTense].inflections[this.randomPronom].verbe);
    };
    GameContainerComponent.prototype.letraCerta = function (letraResposta) {
        return (this.perfilRespostas.temps[this.randomTense].inflections[this.randomPronom].verbe.split(''))[letraResposta];
    };
    GameContainerComponent.prototype.ngOnChanges = function (changes) {
        if (!changes['gonext'].isFirstChange()) {
            this.getRandomVerb();
            this.gonext = false;
        }
    };
    GameContainerComponent.prototype.ngOnInit = function () {
        this.getAllVerbs();
    };
    GameContainerComponent.prototype.getAllVerbs = function () {
        var _this = this;
        this.verbsService.getVerbs()
            .subscribe(function (verbsList) { return _this.verbs = verbsList; }, function (error) { return _this.errorMessage = error; });
        this.verbsTraduires.getTraductions()
            .subscribe(function (verbsList) { return _this.traduires = verbsList; }, function (error) { return _this.errorMessage = error; });
    };
    GameContainerComponent.prototype.getRandomVerb = function () {
        var _this = this;
        if (this.popseulement) {
            this.randomVerb = this.traduires[Math.floor(Math.random() * this.traduires.length)];
            this.randomVerbDef = this.verbs.filter(function (item, index) { return (!item.verbe.indexOf(_this.randomVerb.verbe)); })[0];
        }
        else {
            this.randomVerbDef = this.verbs[Math.floor(Math.random() * this.verbs.length)];
        }
        //this.randomVerbDef = this.verbs[Math.floor(Math.random() * this.verbs.length)];
        this.randomTense = Math.floor(Math.random() * this.game.difficult);
        this.randomPronom = Math.floor(Math.random() * this.randomVerbDef.temps[this.randomTense].inflections.length);
        this.randomPronomText = this.randomVerbDef.temps[this.randomTense].inflections[this.randomPronom].pronom;
        this.perfilRespostas = verb_model_1.VerbDefinition.newVerb();
        this.perfilRespostas.verbe = GameContainerComponent.toCamel(this.randomVerbDef.verbe);
        this.perfilRespostas.translationPT = this.randomVerbDef.translationPT;
        this.perfilRespostas.temps[this.randomTense].inflection = this.randomVerbDef.temps[this.randomTense].inflection;
        this.perfilRespostas.temps[this.randomTense].mode = this.randomVerbDef.temps[this.randomTense].mode;
        this.caixasResposta = new verb_model_1.LetterBoxDefinition(this.randomVerbDef.temps[this.randomTense].inflections[this.randomPronom].verbe.toUpperCase().split(''), this.generateRandomLetters(this.randomVerbDef.temps[this.randomTense].inflections[this.randomPronom].verbe));
        this.faseCompleta = false;
        this.startgame = true;
    };
    GameContainerComponent.prototype.getNextVerb = function (pronom) {
        if (pronom == 6) {
            if (this.perfilRespostas.translationPT == "") {
                this.caixasResposta = new verb_model_1.LetterBoxDefinition(this.randomVerb.texteTraduit.toUpperCase().split(''), this.generateRandomLetters(this.randomVerb.texteTraduit));
                this.faseCompleta = false;
                this.respostaErrada = false;
                this.randomPronom = pronom;
                this.randomPronomText = "Traduction";
            }
        }
        else if (this.perfilRespostas.temps[this.randomTense].inflections[pronom].verbe == "") {
            this.caixasResposta = new verb_model_1.LetterBoxDefinition(this.randomVerbDef.temps[this.randomTense].inflections[pronom].verbe.toUpperCase().split(''), this.generateRandomLetters(this.randomVerbDef.temps[this.randomTense].inflections[pronom].verbe));
            this.faseCompleta = false;
            this.respostaErrada = false;
            this.randomPronom = pronom;
            this.randomPronomText = GameContainerComponent.toCamel(this.perfilRespostas.temps[this.randomTense].inflections[pronom].pronom);
        }
    };
    GameContainerComponent.prototype.generateRandomLetters = function (verb) {
        var text = verb.toUpperCase().split('');
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZÂÀÉÈÊÎÔÛÇ";
        for (var i = text.length; i < this.game.boardSize; i++)
            text.push(possible.charAt(Math.floor(Math.random() * possible.length)));
        return this.shuffle(text);
    };
    GameContainerComponent.prototype.shuffle = function (array) {
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
    GameContainerComponent.prototype.onSelect = function (indexLetraTentativa, resposta) {
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
    GameContainerComponent.prototype.completeThisFase = function () {
        if (this.randomPronom < 6)
            this.perfilRespostas.temps[this.randomTense].inflections[this.randomPronom].verbe = this.randomVerbDef.temps[this.randomTense].inflections[this.randomPronom].verbe;
        else
            this.perfilRespostas.translationPT = this.randomVerb.texteTraduit;
        this.faseCompleta = true;
        this.ponctuation += 100;
        this.showAlert();
    };
    GameContainerComponent.prototype.showAlert = function () {
        //this.close.emit("success-alert");
    };
    GameContainerComponent.prototype.closeAlert = function (obj) {
        console.log("event caught" + obj.toString());
    };
    GameContainerComponent.toCamel = function (verbo) {
        return verbo.replace(/(\-[a-z])/g, function ($1) { return $1.toUpperCase().replace('-', ''); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], GameContainerComponent.prototype, "startgame", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], GameContainerComponent.prototype, "gonext", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], GameContainerComponent.prototype, "ponctuation", void 0);
    GameContainerComponent = __decorate([
        core_1.Component({
            selector: 'game-form',
            templateUrl: 'app/templates/gameContainer.html',
            styleUrls: ['app/stylesheets/gameContainer.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            directives: [common_1.CORE_DIRECTIVES],
            providers: [verbs_service_1.VerbsService, verbstraduire_service_1.VerbsTraduireService]
        }), 
        __metadata('design:paramtypes', [verbs_service_1.VerbsService, verbstraduire_service_1.VerbsTraduireService, menu_service_1.MenuService])
    ], GameContainerComponent);
    return GameContainerComponent;
}());
exports.GameContainerComponent = GameContainerComponent;
//# sourceMappingURL=gameContainer.component.js.map