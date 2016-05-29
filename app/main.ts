import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ConjugueurComponent} from "./components/conjugueur.component";
import {MenuService} from "./services/menu.service";


declare var ENV: string;

if (ENV === 'production') {
    enableProdMode();
}

bootstrap(ConjugueurComponent, [MenuService, HTTP_PROVIDERS]);
