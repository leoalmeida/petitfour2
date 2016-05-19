/**
 * Created by LeonardoAlmeida on 06/05/16.
 */
export class PronomDefinition {
    public static pronomTypes = ["je","tu","il/elle","nous","vous","ils/elles"];

    constructor(public pronom: string, public verbe: string){}

    static newPronomList(){
        let array: PronomDefinition[] = new Array();
        for (let index in PronomDefinition.pronomTypes) array.push(new PronomDefinition(PronomDefinition.pronomTypes[index],""));
        return array;
    }
}
export class VerbTenseDefinition {

    //public static inflectionTypes = ["Présent","Imparfait","Passé composé","Plus-que-parfait","Passé simple","Passé antérieur","Futur simple","Futur antérieur","Subjonctif/Présent","Subjonctif/Passé","Subjonctif/Imparfait","Subjonctif/Plus-que-parfait","Conditionnel/Présent","Conditionnel/Passé première forme","Conditionnel/Passé deuxième forme","Impératif/Présent","Impératif/Passé","Participe/Présent","Participe/Passé","Infinitif/Présent","Infinitif/Passé","Gérondif/Présent","Gérondif/Passé"];
    public static inflectionTypes = ["présent", "passé simple", "imparfait", "futur simple", "présent", "imparfait", "présent", "présent", "plus-que-parfait", "futur antérieur", "passé composé", "passé", "passé antérieur", "passé", "plus-que-parfait"];

    constructor(
        public inflection: string,
        public mode: string,
        public inflections: PronomDefinition[]){
    }

    static newTense(){
        let array: VerbTenseDefinition[] = new Array();

        for (let tense in VerbTenseDefinition.inflectionTypes) array.push(new VerbTenseDefinition(VerbTenseDefinition.inflectionTypes[tense], "",PronomDefinition.newPronomList()));

        return array;
    }
}
export class VerbDefinition {

    constructor(public temps: VerbTenseDefinition[],
                public verbe: string,
                public translationPT: string) {}


    static newVerb(){
        return new VerbDefinition(VerbTenseDefinition.newTense(),"","");
    }

    equals(verbName: string){
        return (this.verbe.indexOf(verbName));
    }
}

export class TranslationDefinition {

    constructor(public verbe: string,
                public translationPT: string) {}
}
export class VerbTraductionDefinition {

    constructor(public divider: string,
                public verbs: TranslationDefinition[]) {}
}
export class VerbPopulairesDefinition {
    constructor(public verbes: string[]) {}
}

export class LetterBoxDefinition {
    public usedLetters: boolean[];
    public answeredLetters: Array<string>;
    public answerLength: number;

    constructor(
        public verbLetters: Array<string>,
        public listLetters: Array<string>
    ) {
        this.answerLength = 0;
        this.usedLetters = [];
        this.answeredLetters = [];
        for (var index = 0; index < listLetters.length; index++) {
            this.usedLetters[index]=false;
            if (index < verbLetters.length) this.answeredLetters[index]="";
        }
    }

    static newLetterBox(){
        return new LetterBoxDefinition([],[]);

    }

    static compare(array1: Array<string>, array2: Array<string>) {
        if (array1.length != array2.length) return false;
        for (var i=0;i<array1.length;i++){
            if (array1[i] != array2[i]) return false;
        }
        return true;
    }
}