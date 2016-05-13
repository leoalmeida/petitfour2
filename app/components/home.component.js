System.register(['@angular/core', "@angular/common", "@angular/router", '@angular/http', 'rxjs/add/observable/throw', 'rxjs/Subject', 'rxjs/add/operator/map', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/switchMap', 'rxjs/add/operator/do', 'rxjs/add/operator/catch', "../services/items.service"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, http_1, Subject_1, items_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (items_service_1_1) {
                items_service_1 = items_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(service, router) {
                    this.service = service;
                    this.router = router;
                    this.showSearch = false;
                    this.searchText = new common_1.Control('');
                    this.searchTermStream = new Subject_1.Subject();
                }
                HomeComponent.prototype.search = function (searchText) { this.searchTermStream.next(searchText); };
                HomeComponent.prototype.toggle = function () { this.showSearch = !this.showSearch; };
                HomeComponent.prototype.goExternal = function (link) { window.location.href = link; };
                HomeComponent.prototype.routerOnActivate = function (curr, prev, currTree) {
                    this.currSegment = curr;
                    this.selectedId = +currTree.parent(curr).getParam('id');
                    //this.service.getAllItems().then(list => this.list = list);
                };
                HomeComponent.prototype.getAllMenuItems = function () {
                    var _this = this;
                    this.service.getAllItems("menu")
                        .subscribe(function (menuItems) { return _this.list = menuItems; }, function (error) { return _this.errorMessage = error; });
                };
                HomeComponent.prototype.onSelect = function (item) {
                    if (Boolean(item.isExternal)) {
                        this.goExternal(item.routeLink);
                    }
                    else {
                        this.router.navigate([("./" + item.routeLink)], this.currSegment);
                    }
                };
                HomeComponent.prototype.ngOnInit = function () {
                    this.getAllMenuItems();
                    //this.service.search("");
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'painel',
                        templateUrl: 'app/templates/home.html',
                        styleUrls: ['app/stylesheets/home.css'],
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        providers: [http_1.JSONP_PROVIDERS, items_service_1.ItemsService]
                    }), 
                    __metadata('design:paramtypes', [items_service_1.ItemsService, router_1.Router])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map