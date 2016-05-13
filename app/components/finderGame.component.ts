/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {VerbsService} from "../services/verbs.service";
import {
    VerbDefinition, PronomDefinition, VerbTenseDefinition,
    LetterBoxDefinition
} from "../models/verb.model";
import { JSONP_PROVIDERS }  from '@angular/http';

@Component({
    selector: 'finder-form',
    templateUrl: 'app/templates/findergame.html',
    styleUrls: ['app/stylesheets/findergame.css'],
    directives: [CORE_DIRECTIVES],
    providers:  [JSONP_PROVIDERS, VerbsService]
})
export class FinderGameComponent implements OnInit {
    private static BOARD_SIZE: number = 18;
    errorMessage: string;
    respostaErrada: boolean;
    alertOpen: boolean;
    faseCompleta: boolean;

    verbs: VerbDefinition[];
    randomVerb: VerbDefinition;
    perfilRespostas: VerbDefinition;

    randomPronom: number;
    randomTense: number;
    dificuldade: number;
    randomPronomText: any;

    @Output() close: EventEmitter<any>;

    caixasResposta: LetterBoxDefinition;


    constructor (private verbsService: VerbsService) {
        this.perfilRespostas = VerbDefinition.newVerb();
        this.caixasResposta = LetterBoxDefinition.newLetterBox();
        this.respostaErrada = false;
        this.faseCompleta = false;
        this.dificuldade = 1;
        this.close = new EventEmitter();
    }

    rightanswer() {
        return (this.perfilRespostas.temps[this.randomTense].inflections[this.randomPronom].verbe === this.randomVerb.temps[this.randomTense].inflections[this.randomPronom].verbe);
    }
    letraCerta(letraResposta: number){
        return (this.perfilRespostas.temps[this.randomTense].inflections[this.randomPronom].verbe.split(''))[letraResposta];
    }

    ngOnInit() {
        this.getAllVerbs();
    }

    getAllVerbs() {
        this.verbsService.getVerbs()
            .subscribe(
                verbsList => this.verbs = verbsList,
                error =>  this.errorMessage = <any>error);
    }

    getRandomVerb() {

        this.randomVerb = this.verbs[Math.floor(Math.random() * this.verbs.length)];
        this.randomTense = Math.floor(Math.random() * this.dificuldade);
        this.randomPronom = Math.floor(Math.random() * this.randomVerb.temps[this.randomTense].inflections.length);
        this.randomPronomText = this.randomVerb.temps[this.randomTense].inflections[this.randomPronom].pronom;

        this.perfilRespostas.verbe = FinderGameComponent.toCamel(this.randomVerb.verbe);
        this.perfilRespostas.translationPT = this.randomVerb.translationPT;
        this.perfilRespostas.temps[this.randomTense].inflection = this.randomVerb.temps[this.randomTense].inflection;
        this.perfilRespostas.temps[this.randomTense].mode = this.randomVerb.temps[this.randomTense].mode;

        this.caixasResposta = new LetterBoxDefinition(
            this.randomVerb.temps[this.randomTense].inflections[this.randomPronom].verbe.toUpperCase().split(''),
            this.generateRandomLetters(this.randomVerb.temps[this.randomTense].inflections[this.randomPronom].verbe)
        );
        this.faseCompleta = false;
    }
    getNextVerb(pronom:number) {
        if (this.perfilRespostas.temps[this.randomTense].inflections[pronom].verbe == "") {
            this.caixasResposta = new LetterBoxDefinition(
                this.randomVerb.temps[this.randomTense].inflections[pronom].verbe.toUpperCase().split(''),
                this.generateRandomLetters(this.randomVerb.temps[this.randomTense].inflections[pronom].verbe)
            );
            this.faseCompleta = false;
            this.respostaErrada = false;
            this.randomPronom = pronom;
            this.randomPronomText = this.perfilRespostas.temps[this.randomTense].inflections[pronom].pronom;
        }
    }

    generateRandomLetters(verb: string) {
        var text = verb.toUpperCase().split('');

        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZÂÀÉÈÊÎÔÛÇ";

        for( var i=text.length; i < FinderGameComponent.BOARD_SIZE; i++ )
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

    completeThisFase(){
        this.perfilRespostas.temps[this.randomTense].inflections[this.randomPronom].verbe = this.randomVerb.temps[this.randomTense].inflections[this.randomPronom].verbe;
        this.faseCompleta = true;
        this.showAlert();
    }

    showAlert() {
        this.close.emit('close');
    }

    closeAlert(obj) {
        console.log("event caught" + obj.toString());
    }

    static toCamel(verbo: string){
        return verbo.replace(/(\-[a-z])/g, function($1){return $1.toUpperCase().replace('-','');});
    }

}