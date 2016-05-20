import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app.component';
import {FinderComponent} from "./components/finder.component";
import {MenuService} from "./services/menu.service";


declare var ENV: string;

if (ENV === 'production') {
    enableProdMode();
}

bootstrap(FinderComponent, [MenuService, HTTP_PROVIDERS]);
