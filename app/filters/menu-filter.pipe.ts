import {Pipe, PipeTransform} from '@angular/core';
import {GameDefinition} from '../models/game.model';
import {filter} from 'lodash';

@Pipe({name: 'menuFilter'})
export class MenuFilterPipe implements PipeTransform {
    transform(items: GameDefinition[], filteredItems: string) {
        if (filteredItems.trim().length<=0) {
            return items;
        }
        return items.filter(returned => (returned.name.indexOf(filteredItems) > -1))
    }
}
