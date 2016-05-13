/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
export class ItemDefinition {

    static qtItens: number = 0;

    constructor(
        public id: number,
        public name: string,
        public imgLink: string,
        public routeLink: string,
        public isExternal: boolean){}

    filter(list: ItemDefinition[], filterOption: string){
        return list;
    }

}