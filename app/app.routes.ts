import {Route} from '@angular/router';
import {HomeComponent} from './components/home.component';
import {FinderComponent} from "./components/finder.component";
import {FinderGameComponent} from "./components/finderGame.component";
import {FinderFormComponent} from "./components/finderForm.component";

export var APP_ROUTES: any[] = [
    {path: '/home', name: 'Home', component: FinderComponent},
    {path: '/jeux/:gameID', name: 'Jeux', component: FinderGameComponent},
    {path: '/administrateur', name: 'Admin', component: FinderFormComponent}
];

/*
*  { path: '/link/github',name:"Github", component: LinksComponent, imgSrc:"/assets/imagens/Github2-96.png", extLink:"https://github.com/leoalmeida/trabalhofinal"},
 { path: '/link/css',name:"CSS", component: LinksComponent, imgSrc:"/assets/imagens/CSS3-96.png", extLink:"https://cssanimation.rocks/pt/"},
 { path: '/link/hbogo',name:"HBO Go", component: LinksComponent, imgSrc:"/assets/imagens/HBOGo-96.png", extLink:"http://www.hbogo.com.br/"},
 { path: '/link/whatsapp',name:"WhatsApp", component: LinksComponent, imgSrc:"/assets/imagens/WhatsApp-96.png", extLink:"https://web.whatsapp.com/"},
 { path: '/link/facebook',name:"Facebook", component: LinksComponent, imgSrc:"/assets/imagens/Facebook-96.png", extLink:"http://www.facebook.com"},
 { path: '/link/chrome',name:"Chrome", component: LinksComponent, imgSrc:"/assets/imagens/Chrome-96.png", extLink:"https://www.google.com/chrome/"}
* */