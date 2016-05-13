import {Component, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

@Component({
    selector: 'navbar',
    templateUrl: 'app/templates/navbar.html',
    styleUrls: ['app/stylesheets/navbar.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [CORE_DIRECTIVES]
})
export class NavbarComponent{
    //@Output() teste: EventEmitter<any> = new EventEmitter();
    
/*
    eventHandler($event) {
        console.log(this.searchText);
        this.teste.emit({
            value: this.searchText
        })
    }*/

}
