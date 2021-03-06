/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component, Input, OnInit, NgZone} from '@angular/core';
import {GameDefinition} from "../models/game.model";
import {CORE_DIRECTIVES, FORM_DIRECTIVES, Control} from "@angular/common";
import {Router, RouteSegment, RouteTree, OnActivate} from "@angular/router";
import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Subject }          from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';  // debug
// import 'rxjs/add/operator/catch';

import {ItemsService} from "../services/items.service";

@Component({
    selector: 'painel',
    templateUrl: 'app/templates/home.html',
    styleUrls: ['app/stylesheets/home.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    providers:  [JSONP_PROVIDERS, ItemsService]
})
export class HomeComponent implements OnInit, OnActivate{
    name=""
    isUser = false

    constructor(private router: Router,
                private service: ItemsService) {}

    list: GameDefinition[];
    private currSegment: RouteSegment;
    private selectedId: number;
    showSearch: boolean = false;
    errorMessage: string;

    searchText: Control = new Control('');

    private searchTermStream = new Subject<string>();

    search(searchText: string) { this.searchTermStream.next(searchText); }

    toggle() {this.showSearch = !this.showSearch;}

    goExternal(link: string) {window.location.href=link;}

    routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
        this.currSegment = curr;
        this.selectedId = +currTree.parent(curr).getParam('id');
        //this.service.getAllItems().then(list => this.list = list);
    }

    getAllMenuItems() {
        this.service.getAllItems("menu")
            .subscribe(
                menuItems => this.list = menuItems,
                error =>  this.errorMessage = <any>error);
    }

    onSelect(game: GameDefinition) {
        let teste: boolean = true;
        if (teste){
            this.goExternal(game.routeLink);
        }else{
            this.router.navigate([`./${game.routeLink}`], this.currSegment);
        }
    }

    ngOnInit() {
        this.getAllMenuItems();
    }

}
