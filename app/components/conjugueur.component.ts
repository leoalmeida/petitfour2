/**
 * Created by LeonardoAlmeida on 07/05/16.
 */
import { Component, OnInit, Input, NgZone} from "@angular/core";
import {GameContainerComponent} from "./gameContainer.component";
import {MainPageComponent} from "./mainPage.component";
import {FacebookService} from "../services/facebook.service";


@Component({
    selector: 'main-app',
    templateUrl: 'app/templates/conjugueur.html',
    styleUrls: ['app/stylesheets/conjugueur.css'],
    directives: [MainPageComponent, GameContainerComponent],
    providers: [FacebookService]
})
export class ConjugueurComponent implements OnInit{
    name="";
    isUser = false;

    startgame: boolean;
    gonext: boolean;
    menuBarOpen: boolean;
    @Input() ponctuation: number;
    constructor(
                private _ngZone: NgZone,
                private _facebookService: FacebookService){
        this.startgame = false;
        this.ponctuation = 0;
        this.menuBarOpen = false;
    }


    ngOnInit(){
        this._facebookService.loadAndInitFBSDK();
    }

    login(){
        var self = this;
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                console.log('Logged in.');
            }
            else {
                FB.login(function() {
                    if (response.status === 'connected') {
                        console.log(response.authResponse.accessToken);
                        FB.api('/me', 'get', function(response) {
                            self._ngZone.run(() => {
                                self.name = this.response.name;
                                self.isUser = true
                            });
                        });
                    }else{
                        console.log('User cancelled login or did not fully authorize.');
                    }
                });
            }
        });

    }

    gotoMenu() {
        this.startgame = false;
    }

    startGame(){
        this.gonext = !this.gonext;
        if (!this.startgame) this.startgame = true;
    }

    toggle(){
        this.menuBarOpen = !this.menuBarOpen;
    }

}