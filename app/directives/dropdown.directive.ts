/**
 * Created by LeonardoAlmeida on 08/05/16.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
export class DropdownValue {
    value:string;
    label:string;

    constructor(value:string,label:string) {
        this.value = value;
        this.label = label;
    }
}

@Component({
    selector: 'tags',
    template: `
    <ul>
      <li *ngFor="#value of values" (click)="selectItem(value.value)">{{value.label}}</li>
    </ul>
  `
})
export class DropdownComponent {
    @Input()
    values: DropdownValue[];

    @Output()
    select: EventEmitter<string>;

    constructor() {
        this.select = new EventEmitter<string>();
    }

    selectItem(value) {
        this.select.emit(value);
    }
}