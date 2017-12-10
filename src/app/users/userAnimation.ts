import {trigger,transition,state,animate,style,query,stagger,keyframes} from "@angular/animations";

export let userAnimation = trigger("userAnimation",[
    transition("*=>*",[
        query("#addQuestion",style({opacity:0}),{optional:true}),
        query(".btnContainer",style({opacity:0}),{optional:true}),
        query(".droppable",style({opacity:0}),{optional:true}),
        query("#addQuestion",stagger("1000ms",[
            animate("2s 1s ease-in",keyframes([
                style({opacity:0,transform:"scale(0,0)",offset:0}),
                style({opacity:0.3,transform:"scale(0.6,0.6)",offset:0.3}),
                style({opacity:0.6,transform:"scale(1.2,1.2)",offset:0.6}),
                style({opacity:1,transform:"scale(1,1)",offset:1})
            ]))
        ]),{optional:true}),
        query(".btnContainer",stagger("1000ms",[
            animate("1s ease-in",keyframes([
                style({opacity:0,transform:"translateX(-100%)",offset:0}),
                style({opacity:0.3,transform:"translateX(-25%)",offset:0.3}),
                style({opacity:0.6,transform:"translateX(15%)",offset:0.6}),
                style({opacity:1,transform:"translateX(0)",offset:1})
            ]))
        ]),{optional:true}),
        query(".droppable",stagger("1000ms",[
            animate("2s ease-in",keyframes([
                style({opacity:0,transform:"scale(0,0)",offset:0}),
                style({opacity:0.3,transform:"scale(0.6,0.6)",offset:0.3}),
                style({opacity:0.6,transform:"scale(1.2,1.2)",offset:0.6}),
                style({opacity:1,transform:"scale(1,1)",offset:1})
            ]))
        ]),{optional:true})
    ]),
]);