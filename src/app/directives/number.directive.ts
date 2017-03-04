import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[number]'
})

export class NumberDirective {
    regexStr = '^[0-9]*$';
    constructor(private el: ElementRef) { }

    @Input() NumberDirective: boolean;

    @HostListener('keydown', ['$event']) onKeyDown(event) {
        let e = <KeyboardEvent>event;
        if ([8, 9, 37, 39, 46, 47, 48, 49, 50 ,51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105].indexOf(e.keyCode) == -1) {
            e.preventDefault();
            return;
        }
    }
}