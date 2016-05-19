 /* Created by LeonardoAlmeida on 06/05/16.
 */
import {Directive, Input, Output, EventEmitter, ElementRef, OnInit, OnChanges} from '@angular/core';

@Directive({
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
})
export class AnimationDirective implements OnInit, OnChanges {
    @Output() onAnimationStart = new EventEmitter<any>();
    @Output() onAnimationEnd = new EventEmitter<any>();

    @Input('animation') animationClasses: string = '';
    @Input() play: boolean = false;
    @Input() id: string = '';  // use for query filtering
    @Input() group: string = ''; // use for query filtering

    _animationQueue: string[] = [];
    _callbacks: (() => void)[] = [];
    element: Element;

    constructor(element: ElementRef) {
        this.element = element.nativeElement;
    }

    ngOnChanges(): void {
        this.setup();
    }

    ngOnInit(): void {
        this.setup();
    }

    addAnimation(animationClasses: string): AnimationDirective {
        animationClasses.split(' ')
            .map(c => this._animationQueue.push(c));
        this.animationClasses += " " + animationClasses;
        return this;
    }

    setup(): AnimationDirective {
        this._animationQueue = this.animationClasses
            .split(" ")
            .filter((c) => c.length > 0);

        if(this.play && this._animationQueue.length > 0)
            this.startAnimation();
        return this;
    }

    startAnimation(callback: () => void = null): AnimationDirective {
        if(callback != null)
            this._callbacks.push(callback);

        this._animationQueue.shift()
            .split('.')
            .filter((c) => c.length > 0)
            .map((c) => this.element.classList.add(c));
        return this;
    }

    cleanAnimation(): AnimationDirective {
        this.animationClasses
            .replace('.', ' ')
            .split(' ')
            .filter((c) => c.length > 0)
            .map((c) => {
                this.element.classList.remove(c)
            });
        return this;
    }

    animationStarted(event: Event): void {
        this.onAnimationStart.next(null);
    }

    animationEnded(event: Event): void {
        this.cleanAnimation();
        if(this._animationQueue.length > 0){
            this.startAnimation();
            return;
        }

        while(this._callbacks.length > 0)
            this._callbacks.shift()();

        this.onAnimationEnd.next(null);
    }
}