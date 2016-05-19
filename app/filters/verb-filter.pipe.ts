/**
 * Created by LeonardoAlmeida on 18/05/16.
 */
import {Pipe, PipeTransform} from '@angular/core';
import {filter} from 'lodash';
import {VerbDefinition} from "../models/verb.model";

@Pipe({
    name: 'asVerbFilter'
})
export class VerbFilterPipe implements PipeTransform {
    transform(verbs: VerbDefinition[], index): VerbDefinition[] {
        if (index) {
            return null;
        }

        return filter(verbs, {index});
    }
}