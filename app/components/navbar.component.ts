import {Component, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {RouteParams} from '@angular/router-deprecated';
import {RouteSegment} from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: 'app/templates/navbar.html',
    styleUrls: ['app/stylesheets/navbar.css'],
    directives: [CORE_DIRECTIVES]
})
export class NavbarComponent{

    pageText: string;

    contructor(params: RouteParams){
        this.pageText = "- " + params.get('gameID');
    }

    //@Output() teste: EventEmitter<any> = new EventEmitter();
    
/*
    eventHandler($event) {
        console.log(this.searchText);
        this.teste.emit({
            value: this.searchText
        })
    }*/

}
