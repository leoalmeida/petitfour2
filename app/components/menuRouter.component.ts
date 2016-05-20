/**
 * Created by LeonardoAlmeida on 06/05/16.
 */
/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from "@angular/router";
import {HomeComponent} from "./home.component";
import {ConjugueurComponent} from "./conjugueur.component";

@Component({
    template:  `
        <router-outlet></router-outlet>
        
        <a (click)="openMenu()" class="botao botao-success botao-grande botao-shadow img-circle fixed-btn-menu">
            <i class="fa fa-bars fa-fw" aria-hidden="true"></i>
        </a>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    { path: '', component: HomeComponent},
    { path: '/finder', component: ConjugueurComponent}
])
export class MenuRouterComponent{

    constructor(private router: Router) {}

    openMenu(){
        this.router.navigate([`./${'home'}`]);
    }

}
