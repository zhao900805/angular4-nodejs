import {trigger,transition,state,animate,style,query,stagger,keyframes} from "@angular/animations";

export let searchInputAnimation = trigger("searchInputAnimation",[
    state("inactive",style({
        opacity:0
    })),
    state("active",style({
        opacity:1
    })),
    transition("inactive=>active",[
        animate("1s 1s ease-in",keyframes([
            style({opacity:0,transform:"scale(0,0)",offset:0}),
            style({opacity:0.3,transform:"scale(0.6,0.6)",offset:0.3}),
            style({opacity:0.6,transform:"scale(1.3,1.3)",offset:0.6}),
            style({opacity:0,transform:"scale(1,1)",offset:1})
        ]))
    ])
]);