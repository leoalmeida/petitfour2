System.register(['./components/home.component', "./components/finder.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var home_component_1, finder_component_1;
    var APP_ROUTES, MENU_ROUTES;
    return {
        setters:[
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (finder_component_1_1) {
                finder_component_1 = finder_component_1_1;
            }],
        execute: function() {
            exports_1("APP_ROUTES", APP_ROUTES = [
                { path: '/', component: home_component_1.HomeComponent }
            ]);
            exports_1("MENU_ROUTES", MENU_ROUTES = [
                { path: '/finder', component: finder_component_1.FinderComponent }
            ]);
        }
    }
});
/*
*  { path: '/link/github',name:"Github", component: LinksComponent, imgSrc:"/assets/imagens/Github2-96.png", extLink:"https://github.com/leoalmeida/trabalhofinal"},
 { path: '/link/css',name:"CSS", component: LinksComponent, imgSrc:"/assets/imagens/CSS3-96.png", extLink:"https://cssanimation.rocks/pt/"},
 { path: '/link/hbogo',name:"HBO Go", component: LinksComponent, imgSrc:"/assets/imagens/HBOGo-96.png", extLink:"http://www.hbogo.com.br/"},
 { path: '/link/whatsapp',name:"WhatsApp", component: LinksComponent, imgSrc:"/assets/imagens/WhatsApp-96.png", extLink:"https://web.whatsapp.com/"},
 { path: '/link/facebook',name:"Facebook", component: LinksComponent, imgSrc:"/assets/imagens/Facebook-96.png", extLink:"http://www.facebook.com"},
 { path: '/link/chrome',name:"Chrome", component: LinksComponent, imgSrc:"/assets/imagens/Chrome-96.png", extLink:"https://www.google.com/chrome/"}
* */ 
//# sourceMappingURL=app.routes.js.map