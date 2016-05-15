"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MenuFilterPipe = (function () {
    function MenuFilterPipe() {
    }
    MenuFilterPipe.prototype.transform = function (items, filteredItems) {
        if (filteredItems.trim().length <= 0) {
            return items;
        }
        return items.filter(function (returned) { return (returned.name.indexOf(filteredItems) > -1); });
    };
    MenuFilterPipe = __decorate([
        core_1.Pipe({ name: 'menuFilter' }), 
        __metadata('design:paramtypes', [])
    ], MenuFilterPipe);
    return MenuFilterPipe;
}());
exports.MenuFilterPipe = MenuFilterPipe;
//# sourceMappingURL=menu-filter.pipe.js.map