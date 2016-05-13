/**
 * Created by LeonardoAlmeida on 05/05/16.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {
    log(message: string): void {
        console.log(message);
    }
}