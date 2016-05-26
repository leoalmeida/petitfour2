/**
 * Created by LeonardoAlmeida on 28/04/16.
 */
import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';


declare const FB: any;

@Component({
    selector: 'facebook-login',
    templateUrl: './app/templates/facelogin.html',
    directives: [ROUTER_DIRECTIVES]
})

export class FacebookLoginComponent implements OnInit {

    constructor() {
        FB.init({
            appId      : '519364224923923',
            cookie     : false,  // enable cookies to allow the server to access
            // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.6' // use graph api version 2.5
        });
    }

    onFacebookLoginClick() {
        FB.login();
    }

    statusChangeCallback(resp) {
        if (resp.status === 'connected') {
            // connect here with your server for facebook login by passing access token given by facebook
        }else if (resp.status === 'not_authorized') {
        }else {
        }
    };
    ngOnInit() {
        FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        });
    }
}
