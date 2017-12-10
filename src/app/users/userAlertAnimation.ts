import {trigger,transition,state,animate,style,query,stagger,keyframes} from "@angular/animations";

export let userAlertAnimation = trigger("userAlertAnimation",[
    state("inactive",style({
        opacity:0
    })),
    state("active",style({
        opacity:1
    })),
    transition("inactive=>active",[
        animate("1s ease-in",keyframes([
            style({opacity:0,transform:" rotate(0) ,scale(0,0)"}),
            style({opacity:0.25,transform:" rotate(90deg) ,scale(0.7,0.7)"}),
            style({opacity:0.25,transform:" rotate(270deg) ,scale(1.4,1.4)"}),
            style({opacity:0.25,transform:" rotate(360deg) ,scale(1,1)"})
        ]))
    ])
]);