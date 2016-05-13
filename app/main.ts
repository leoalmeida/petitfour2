import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app.component';
import {LoggerService} from './services/logger.service';

import 'rxjs/Rx';

bootstrap(AppComponent, [LoggerService, ROUTER_PROVIDERS, HTTP_PROVIDERS]);