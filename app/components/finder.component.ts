/**
 * Created by LeonardoAlmeida on 07/05/16.
 */
import { Component }            from '@angular/core';
//import { JSONP_PROVIDERS }      from '@angular/http';
//import {VerbsService} from "../services/verbs.service";
//import {FinderFormComponent} from "./finderForm.component";
import {FinderGameComponent} from "./finderGame.component";

//import { provide }              from '@angular/core';
//import { XHRBackend, HTTP_PROVIDERS }           from '@angular/http';
//import { InMemoryBackendService,  SEED_DATA }   from 'angular2-in-memory-web-api/core';
//import {VerbsData} from "../data/verbs-data";


@Component({
    selector: 'finder',
    template: `
            <finder-form>
            </finder-form>
    `,
    directives: [FinderGameComponent]
    //providers:  [HTTP_PROVIDERS,VerbsService, provide(XHRBackend, { useClass: InMemoryBackendService }),provide(SEED_DATA,  { useClass: VerbsData })]
})
export class FinderComponent { }