import { trigger, state, style, animate, transition } from '@angular/animations';

export const sIn = trigger(
    'slideIn', [
        state('middle', style({
            opacity: 1,
            transform: 'translateX(0)'
        })),
        transition('void => *', [
            style({
                opacity: 0,
                transform: 'translateX(-200px)'
            }),
            animate(1000)
        ]),
    ]
);


export const sOut = trigger('slideOut', [
    state('normal', style({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    state('out', style({
        opacity: 0,
        transform: 'translateX(200px)'
    })),
    transition('normal => out', animate(1000)),

]);


