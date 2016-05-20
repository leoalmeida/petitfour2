import {Route} from '@angular/router';
import {HomeComponent} from './components/home.component';
import {ConjugueurComponent} from "./components/conjugueur.component";
import {GameContainerComponent} from "./components/gameContainer.component";
import {ConfigFormComponent} from "./components/configForm.component";

export var APP_ROUTES: any[] = [
    {path: '/home', name: 'Home', component: ConjugueurComponent},
    {path: '/help', name: 'Help', component: ConfigFormComponent},
    {path: '/administrateur', name: 'Admin', component: ConfigFormComponent}
];

/*
*  { path: '/link/github',name:"Github", component: LinksComponent, imgSrc:"/assets/imagens/Github2-96.png", extLink:"https://github.com/leoalmeida/trabalhofinal"},
 { path: '/link/css',name:"CSS", component: LinksComponent, imgSrc:"/assets/imagens/CSS3-96.png", extLink:"https://cssanimation.rocks/pt/"},
 { path: '/link/hbogo',name:"HBO Go", component: LinksComponent, imgSrc:"/assets/imagens/HBOGo-96.png", extLink:"http://www.hbogo.com.br/"},
 { path: '/link/whatsapp',name:"WhatsApp", component: LinksComponent, imgSrc:"/assets/imagens/WhatsApp-96.png", extLink:"https://web.whatsapp.com/"},
 { path: '/link/facebook',name:"Facebook", component: LinksComponent, imgSrc:"/assets/imagens/Facebook-96.png", extLink:"http://www.facebook.com"},
 { path: '/link/chrome',name:"Chrome", component: LinksComponent, imgSrc:"/assets/imagens/Chrome-96.png", extLink:"https://www.google.com/chrome/"}
* */