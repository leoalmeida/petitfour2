import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {NavbarComponent} from "./components/navbar.component";
import {MenuService} from "./services/menu.service";
import {APP_ROUTES} from "./app.routes";

@Component({
    selector: 'main-app',
    templateUrl: 'app/templates/app.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [NavbarComponent,ROUTER_DIRECTIVES],
    providers: [MenuService]
})
@Routes(APP_ROUTES)
export class AppComponent implements OnInit {

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.navigate(['/home']);
    }
}
