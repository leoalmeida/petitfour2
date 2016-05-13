System.register(['@angular/core', "@angular/router", "./home.component", "./finder.component"], function(exports_1, context_1) {
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
    var core_1, router_1, home_component_1, finder_component_1;
    var MenuRouterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (finder_component_1_1) {
                finder_component_1 = finder_component_1_1;
            }],
        execute: function() {
            MenuRouterComponent = (function () {
                function MenuRouterComponent(router) {
                    this.router = router;
                }
                MenuRouterComponent.prototype.openMenu = function () {
                    this.router.navigate([("./" + 'home')]);
                };
                MenuRouterComponent = __decorate([
                    core_1.Component({
                        template: "\n        <router-outlet></router-outlet>\n        \n        <a (click)=\"openMenu()\" class=\"botao botao-success botao-grande botao-shadow img-circle fixed-btn-menu\">\n            <i class=\"fa fa-bars fa-fw\" aria-hidden=\"true\"></i>\n        </a>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.Routes([
                        { path: '', component: home_component_1.HomeComponent },
                        { path: '/finder', component: finder_component_1.FinderComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], MenuRouterComponent);
                return MenuRouterComponent;
            }());
            exports_1("MenuRouterComponent", MenuRouterComponent);
        }
    }
});
//# sourceMappingURL=menuRouter.component.js.map