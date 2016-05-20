"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var finder_component_1 = require("./components/finder.component");
var menu_service_1 = require("./services/menu.service");
if (ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(finder_component_1.FinderComponent, [menu_service_1.MenuService, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map