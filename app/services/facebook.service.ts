import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class FacebookService {

    constructor() {
        if (!window.fbAsyncInit) {
            console.log('define');
            window.fbAsyncInit = function() {
                FB.init({
                    appId: "519364224923923",
                    cookie: true,
                    xfbml: true,
                    version: 'v2.6',
                    authResponse:""
                });
            };
        }
    }

    loadAndInitFBSDK(): Observable<any>{
        var js,
          id = 'facebook-jssdk',
          ref = document.getElementsByTagName('script')[0];

        if (document.getElementById(id)) {
          return;
        }

        js = document.createElement('script');
        js.id = id;
        js.async = true;
        js.src = "//connect.facebook.net/pt_BR/sdk.js";

        ref.parentNode.insertBefore(js, ref);
    }

}
