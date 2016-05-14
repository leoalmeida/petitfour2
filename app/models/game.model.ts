/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
export class GameDefinition {

    constructor(
        public id: number,
        public name: string,
        public imgLink: string,
        public routeLink: string,
        public boardSize: number,
        public difficult: number){}

    filter(list: GameDefinition[], filterOption: string){
        return list;
    }

}