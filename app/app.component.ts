import {Component, OnInit} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router, OnActivate, RouteSegment, Route} from '@angular/router';
//import {APP_ROUTES, MENU_ROUTES} from './app.routes';
import {NavbarComponent} from "./components/navbar.component";
import {LoggerService} from "./services/logger.service";
//import {MenuRouterComponent} from "./components/menuRouter.component";
import {FinderComponent} from "./components/finder.component";
//import {FinderGameComponent} from "./components/finderGame.component";
import {FinderFormComponent} from "./components/finderForm.component";

@Component({
    selector: 'main-app',
    templateUrl: 'app/templates/app.html',
    directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
@Routes([
    {path: '/finder', component: FinderComponent},
    {path: '/verbos', component: FinderFormComponent}
])
export class AppComponent implements OnInit, OnActivate {
    private logger: LoggerService;
    private curSegment: RouteSegment;

    constructor(private router: Router, logger: LoggerService) {
        this.logger = logger;
    }

    ngOnInit() {
        this.router.navigate(['/finder']);
    }

    routerOnActivate(curr: RouteSegment) {
        this.curSegment = curr;
    }
}
