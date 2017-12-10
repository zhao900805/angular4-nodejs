import {trigger,transition,state,animate,style,query,stagger,keyframes} from "@angular/animations";

export let weatherAnimation_2 = trigger("weatherAnimation_2",[
    transition("*=>*",[
        query(".row",style({opacity:0}),{optional:true}),
        query(".row",stagger("1000ms",[
            animate("2s 1s ease-in",keyframes([
                style({opacity:0,transform:"scale(0,0)",offset:0}),
                style({opacity:0.3,transform:"scale(0.6,0.6)",offset:0.3}),
                style({opacity:0.6,transform:"scale(1.2,1.2)",offset:0.6}),
                style({opacity:1,transform:"scale(1,1)",offset:1})
            ]))
        ]),{optional:true})
    ])
]);