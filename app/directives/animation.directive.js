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
/* Created by LeonardoAlmeida on 06/05/16.
*/
var core_1 = require('@angular/core');
var AnimationDirective = (function () {
    function AnimationDirective(element) {
        this.onAnimationStart = new core_1.EventEmitter();
        this.onAnimationEnd = new core_1.EventEmitter();
        this.animationClasses = '';
        this.play = false;
        this.id = ''; // use for query filtering
        this.group = ''; // use for query filtering
        this._animationQueue = [];
        this._callbacks = [];
        this.element = element.nativeElement;
    }
    AnimationDirective.prototype.ngOnChanges = function () {
        this.setup();
    };
    AnimationDirective.prototype.ngOnInit = function () {
        this.setup();
    };
    AnimationDirective.prototype.addAnimation = function (animationClasses) {
        var _this = this;
        animationClasses.split(' ')
            .map(function (c) { return _this._animationQueue.push(c); });
        this.animationClasses += " " + animationClasses;
        return this;
    };
    AnimationDirective.prototype.setup = function () {
        this._animationQueue = this.animationClasses
            .split(" ")
            .filter(function (c) { return c.length > 0; });
        if (this.play && this._animationQueue.length > 0)
            this.startAnimation();
        return this;
    };
    AnimationDirective.prototype.startAnimation = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        if (callback != null)
            this._callbacks.push(callback);
        this._animationQueue.shift()
            .split('.')
            .filter(function (c) { return c.length > 0; })
            .map(function (c) { return _this.element.classList.add(c); });
        return this;
    };
    AnimationDirective.prototype.cleanAnimation = function () {
        var _this = this;
        this.animationClasses
            .replace('.', ' ')
            .split(' ')
            .filter(function (c) { return c.length > 0; })
            .map(function (c) {
            _this.element.classList.remove(c);
        });
        return this;
    };
    AnimationDirective.prototype.animationStarted = function (event) {
        this.onAnimationStart.next(null);
    };
    AnimationDirective.prototype.animationEnded = function (event) {
        this.cleanAnimation();
        if (this._animationQueue.length > 0) {
            this.startAnimation();
            return;
        }
        while (this._callbacks.length > 0)
            this._callbacks.shift()();
        this.onAnimationEnd.next(null);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AnimationDirective.prototype, "onAnimationStart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AnimationDirective.prototype, "onAnimationEnd", void 0);
    __decorate([
        core_1.Input('animation'), 
        __metadata('design:type', String)
    ], AnimationDirective.prototype, "animationClasses", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AnimationDirective.prototype, "play", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AnimationDirective.prototype, "id", void 0);
    __decorate([
        // use for query filtering
        core_1.Input(), 
        __metadata('design:type', String)
    ], AnimationDirective.prototype, "group", void 0);
    AnimationDirective = __decorate([
        core_1.Directive({
            selector: '[animation]',
            host: {
                '(animationstart)': 'animationStarted($event)',
                '(webkitAnimationStart)': 'animationStarted($event)',
                '(oanimationstart)': 'animationStarted($event)',
                '(MSAnimationStart)': 'animationStarted($event)',
                '(animationend)': 'animationEnded($event)',
                '(webkitAnimationEnd)': 'animationEnded($event)',
                '(oanimationend)': 'animationEnded($event)',
                '(MSAnimationEnd)': 'animationEnded($event)'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AnimationDirective);
    return AnimationDirective;
}());
exports.AnimationDirective = AnimationDirective;
//# sourceMappingURL=animation.directive.js.map