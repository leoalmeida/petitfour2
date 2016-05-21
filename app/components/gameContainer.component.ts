/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component, OnInit, OnChanges, SimpleChange, EventEmitter, Input, ChangeDetectionStrategy} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {Router, RouteSegment} from '@angular/router';
import {VerbsService} from "../services/verbs.service";
import {VerbDefinition, LetterBoxDefinition, VerbeTraduiresDefinition
} from "../models/verb.model";
import {GameDefinition} from "../models/game.model"
import { JSONP_PROVIDERS }  from '@angular/http';
import {MenuService} from "../services/menu.service";
import {VerbsTraduireService} from "../services/verbstraduire.service";

@Component({
    selector: 'game-form',
    templateUrl: 'app/templates/gameContainer.html',
    styleUrls: ['app/stylesheets/gameContainer.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [CORE_DIRECTIVES],
    providers:  [VerbsService, VerbsTraduireService]
})
export class GameContainerComponent implements OnInit, OnChanges {
    @Input() startgame: boolean;
    @Input() gonext:boolean;
    @Input() ponctuation: number;

    game: GameDefinition;

    errorMessage: string;
    respostaErrada: boolean;
    faseCompleta: boolean;

    verbs: VerbDefinition[];
    traduires: VerbeTraduiresDefinition[];
    randomVerb: VerbeTraduiresDefinition;
    randomVerbDef: VerbDefinition;

    popseulement: boolean;
    perfilRespostas: VerbDefinition;

    randomPronom: number;
    randomTense: number;
    randomPronomText: any;

    //@Output() close: EventEmitter<string>;

    caixasResposta: LetterBoxDefinition;


    constructor (private verbsService: VerbsService,
                 private verbsTraduires: VerbsTraduireService,
                 private menuService: MenuService) {
        this.game = GameDefinition.newGame();
        this.perfilRespostas = VerbDefinition.newVerb();
        this.caixasResposta = LetterBoxDefinition.newLetterBox();
        this.respostaErrada = false;
        this.faseCompleta = false;
        //this.close = new EventEmitter<string>();
        this.popseulement = true;
        this.gonext = false;
        this.getAllVerbs();
    }

    routerOnActivate(curr: RouteSegment): void {
        let id = +curr.getParam('gameID');
        this.menuService.getAllMenuItems()
            .subscribe(menuList => menuList.forEach((item, index) => {
                            if(item.id === id) {
                                this.game = item;
                            }
                        }),
                        error =>  this.errorMessage = <any>error);

    }

    rightanswer() {
        return (this.perfilRespostas.temps[this.randomTense].inflections[this.randomPronom].verbe === this.randomVerbDef.temps[this.randomTense].inflections[this.randomPronom].verbe);
    }
    letraCerta(letraResposta: number){
        return (this.perfilRespostas.temps[this.randomTense].inflections[this.randomPronom].verbe.split(''))[letraResposta];
    }

    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        if (!changes['gonext'].isFirstChange()) {
            this.getRandomVerb();
            this.gonext = false;
        }
    }

    ngOnInit() {
        this.getAllVerbs();
    }

    getAllVerbs() {
        this.verbsService.getVerbs()
            .subscribe(
                verbsList => this.verbs = verbsList,
                error =>  this.errorMessage = <any>error);
        this.verbsTraduires.getTraductions()
            .subscribe(
                verbsList => this.traduires = verbsList,
                error =>  this.errorMessage = <any>error);
    }

    getRandomVerb() {
        if (this.popseulement) {
            this.randomVerb = this.traduires[Math.floor(Math.random() * this.traduires.length)];
            this.randomVerbDef = this.verbs.filter(
                (item, index) => (!item.verbe.indexOf(this.randomVerb.verbe)))[0];
        }else{
            this.randomVerbDef = this.verbs[Math.floor(Math.random() * this.verbs.length)];
        }
        //this.randomVerbDef = this.verbs[Math.floor(Math.random() * this.verbs.length)];
        this.randomTense = Math.floor(Math.random() * this.game.difficult);
        this.randomPronom = Math.floor(Math.random() * this.randomVerbDef.temps[this.randomTense].inflections.length);
        this.randomPronomText = this.randomVerbDef.temps[this.randomTense].inflections[this.randomPronom].pronom;

        this.perfilRespostas = VerbDefinition.newVerb();
        this.perfilRespostas.verbe = GameContainerComponent.toCamel(this.randomVerbDef.verbe);
        this.perfilRespostas.translationPT = this.randomVerbDef.translationPT;
        this.perfilRespostas.temps[this.randomTense].inflection = this.randomVerbDef.temps[this.randomTense].inflection;
        this.perfilRespostas.temps[this.randomTense].mode = this.randomVerbDef.temps[this.randomTense].mode;

        this.caixasResposta = new LetterBoxDefinition(
            this.randomVerbDef.temps[this.randomTense].inflections[this.randomPronom].verbe.toUpperCase().split(''),
            this.generateRandomLetters(this.randomVerbDef.temps[this.randomTense].inflections[this.randomPronom].verbe)
        );
        this.faseCompleta = false;
        this.startgame = true;
    }

    getNextVerb(pronom:number) {
        if (pronom==6) {
            if (this.perfilRespostas.translationPT == ""){
                this.caixasResposta = new LetterBoxDefinition(
                    this.randomVerb.texteTraduit.toUpperCase().split(''),
                    this.generateRandomLetters(this.randomVerb.texteTraduit)
                );
                this.faseCompleta = false;
                this.respostaErrada = false;
                this.randomPronom = pronom;
                this.randomPronomText = "Traduction";

            }
        }else if (this.perfilRespostas.temps[this.randomTense].inflections[pronom].verbe == "") {
            this.caixasResposta = new LetterBoxDefinition(
                this.randomVerbDef.temps[this.randomTense].inflections[pronom].verbe.toUpperCase().split(''),
                this.generateRandomLetters(this.randomVerbDef.temps[this.randomTense].inflections[pronom].verbe)
            );
            this.faseCompleta = false;
            this.respostaErrada = false;
            this.randomPronom = pronom;
            this.randomPronomText = GameContainerComponent.toCamel(this.perfilRespostas.temps[this.randomTense].inflections[pronom].pronom);
        }
    }

    generateRandomLetters(verb: string) {
        var text = verb.toUpperCase().split('');

        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZÂÀÉÈÊÎÔÛÇ";

        for( var i=text.length; i < this.game.boardSize; i++ )
            text.push(possible.charAt(Math.floor(Math.random() * possible.length)));

        return this.shuffle(text);
    }

    shuffle(array) {
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
    }

    onSelect(indexLetraTentativa:number, resposta:boolean){
        if (resposta){
            for (var currentIndex = 0; currentIndex < this.caixasResposta.verbLetters.length; currentIndex++){
                if (this.caixasResposta.answeredLetters[currentIndex] == "") {
                    this.caixasResposta.answeredLetters[currentIndex] = this.caixasResposta.listLetters[indexLetraTentativa];
                    this.caixasResposta.usedLetters[indexLetraTentativa] = true;
                    this.caixasResposta.answerLength++;
                    if (LetterBoxDefinition.compare(this.caixasResposta.answeredLetters,this.caixasResposta.verbLetters)) this.completeThisFase();
                    else if (this.caixasResposta.answerLength >= this.caixasResposta.verbLetters.length) this.respostaErrada = true;

                    return;
                }
            }
        }else{
            for (var currentIndex = 0; currentIndex < this.caixasResposta.listLetters.length; currentIndex++){
                if ((this.caixasResposta.listLetters[currentIndex] == this.caixasResposta.answeredLetters[indexLetraTentativa])
                && this.caixasResposta.usedLetters[currentIndex]){
                    this.caixasResposta.answeredLetters[indexLetraTentativa] = "";
                    this.caixasResposta.usedLetters[currentIndex] = false;
                    this.caixasResposta.answerLength--;
                    this.respostaErrada = false;
                    return;
                }
            }
        }

    }

    completeThisFase() {
        if (this.randomPronom < 6)
                this.perfilRespostas.temps[this.randomTense].inflections[this.randomPronom].verbe = this.randomVerbDef.temps[this.randomTense].inflections[this.randomPronom].verbe;
        else this.perfilRespostas.translationPT = this.randomVerb.texteTraduit;

        this.faseCompleta = true;
        this.ponctuation += 100;
        this.showAlert();
    }

    showAlert() {
        //this.close.emit("success-alert");
    }

    closeAlert(obj) {
        console.log("event caught" + obj.toString());
    }

    static toCamel(verbo: string){
        return verbo.replace(/(\-[a-z])/g, function($1){return $1.toUpperCase().replace('-','');});
    }

}