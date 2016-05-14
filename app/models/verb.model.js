System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PronomDefinition, VerbTenseDefinition, VerbDefinition, LetterBoxDefinition;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by LeonardoAlmeida on 06/05/16.
             */
            PronomDefinition = (function () {
                function PronomDefinition(pronom, verbe) {
                    this.pronom = pronom;
                    this.verbe = verbe;
                }
                PronomDefinition.newPronomList = function () {
                    var array = new Array();
                    for (var index in PronomDefinition.pronomTypes)
                        array.push(new PronomDefinition(PronomDefinition.pronomTypes[index], ""));
                    return array;
                };
                PronomDefinition.pronomTypes = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];
                return PronomDefinition;
            }());
            exports_1("PronomDefinition", PronomDefinition);
            VerbTenseDefinition = (function () {
                function VerbTenseDefinition(inflection, mode, inflections) {
                    this.inflection = inflection;
                    this.mode = mode;
                    this.inflections = inflections;
                }
                VerbTenseDefinition.newTense = function () {
                    var array = new Array();
                    for (var tense in VerbTenseDefinition.inflectionTypes)
                        array.push(new VerbTenseDefinition(VerbTenseDefinition.inflectionTypes[tense], "", PronomDefinition.newPronomList()));
                    return array;
                };
                //public static inflectionTypes = ["Présent","Imparfait","Passé composé","Plus-que-parfait","Passé simple","Passé antérieur","Futur simple","Futur antérieur","Subjonctif/Présent","Subjonctif/Passé","Subjonctif/Imparfait","Subjonctif/Plus-que-parfait","Conditionnel/Présent","Conditionnel/Passé première forme","Conditionnel/Passé deuxième forme","Impératif/Présent","Impératif/Passé","Participe/Présent","Participe/Passé","Infinitif/Présent","Infinitif/Passé","Gérondif/Présent","Gérondif/Passé"];
                VerbTenseDefinition.inflectionTypes = ["présent", "passé simple", "imparfait", "futur simple", "présent", "imparfait", "présent", "présent", "plus-que-parfait", "futur antérieur", "passé composé", "passé", "passé antérieur", "passé", "plus-que-parfait"];
                return VerbTenseDefinition;
            }());
            exports_1("VerbTenseDefinition", VerbTenseDefinition);
            VerbDefinition = (function () {
                function VerbDefinition(temps, verbe, translationPT) {
                    this.temps = temps;
                    this.verbe = verbe;
                    this.translationPT = translationPT;
                }
                VerbDefinition.newVerb = function () {
                    return new VerbDefinition(VerbTenseDefinition.newTense(), "", "");
                };
                return VerbDefinition;
            }());
            exports_1("VerbDefinition", VerbDefinition);
            LetterBoxDefinition = (function () {
                function LetterBoxDefinition(verbLetters, listLetters) {
                    this.verbLetters = verbLetters;
                    this.listLetters = listLetters;
                    this.answerLength = 0;
                    this.usedLetters = [];
                    this.answeredLetters = [];
                    for (var index = 0; index < listLetters.length; index++) {
                        this.usedLetters[index] = false;
                        if (index < verbLetters.length)
                            this.answeredLetters[index] = "";
                    }
                }
                LetterBoxDefinition.newLetterBox = function () {
                    return new LetterBoxDefinition([], []);
                };
                LetterBoxDefinition.compare = function (array1, array2) {
                    if (array1.length != array2.length)
                        return false;
                    for (var i = 0; i < array1.length; i++) {
                        if (array1[i] != array2[i])
                            return false;
                    }
                    return true;
                };
                return LetterBoxDefinition;
            }());
            exports_1("LetterBoxDefinition", LetterBoxDefinition);
        }
    }
});
//# sourceMappingURL=verb.model.js.map