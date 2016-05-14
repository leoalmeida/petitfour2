import {Component, OnInit} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router, OnActivate, RouteSegment, Route} from '@angular/router';
import {NavbarComponent} from "./components/navbar.component";
import {FinderComponent} from "./components/finder.component";
import {FinderFormComponent} from "./components/finderForm.component";
import {FinderGameComponent} from "./components/finderGame.component";
import {MenuService} from "./services/menu.service";

@Component({
    selector: 'main-app',
    templateUrl: 'app/templates/app.html',
    directives: [ROUTER_DIRECTIVES, NavbarComponent],
    providers: [MenuService]
})
@Routes([
    {path: '/home', component: FinderComponent},
    {path: '/jeux/:gameID', component: FinderGameComponent},
    {path: '/administrateur', component: FinderFormComponent}
])
export class AppComponent implements OnInit {

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.navigate(['/home']);
    }
}
