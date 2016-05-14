System.register(['@angular/core', '@angular/router', "./components/navbar.component", "./components/finder.component", "./components/finderForm.component", "./components/finderGame.component", "./services/menu.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, navbar_component_1, finder_component_1, finderForm_component_1, finderGame_component_1, menu_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (finder_component_1_1) {
                finder_component_1 = finder_component_1_1;
            },
            function (finderForm_component_1_1) {
                finderForm_component_1 = finderForm_component_1_1;
            },
            function (finderGame_component_1_1) {
                finderGame_component_1 = finderGame_component_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    this.router = router;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.router.navigate(['/home']);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        templateUrl: 'app/templates/app.html',
                        directives: [router_1.ROUTER_DIRECTIVES, navbar_component_1.NavbarComponent],
                        providers: [menu_service_1.MenuService]
                    }),
                    router_1.Routes([
                        { path: '/home', component: finder_component_1.FinderComponent },
                        { path: '/jeux/:gameID', component: finderGame_component_1.FinderGameComponent },
                        { path: '/administrateur', component: finderForm_component_1.FinderFormComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
