import {trigger,transition,state,animate,style,query,stagger,keyframes} from "@angular/animations";

export let historyAnimation_2 = trigger("historyAnimation_2",[
    transition("*=>*",[
        query("#searchContainer",style({opacity:0}),{optional:true}),
        query("#searchContainer",stagger("1000ms",[
            animate("2s 1s ease-in",keyframes([
                style({opacity:0,transform:"translateX(100%)",offset:0}),
                style({opacity:0.3,transform:"translateX(55%)",offset:0.3}),
                style({opacity:0.6,transform:"translateX(15%)",offset:0.6}),
                style({opacity:1,transform:"translateX(0)",offset:1})
            ]))
        ]),{optional:true})
    ])
]) 