import {trigger,transition,state,animate,style,query,stagger,keyframes} from "@angular/animations";

export let weatherByCityAnimationTitle = trigger("weatherByCityAnimationTitle",[
    transition("*=>*",[
        query("h1,img",style({opacity:0}),{optional:true}),
        query("#generalforecastId",style({opacity:0}),{optional:true}),
        query("h1,img",stagger("1000ms",[
            animate("1s ease-in",keyframes([
                style({opacity:0,transform:"translateX(-100%)",offset:0}),
                style({opacity:0.3,transform:"translateX(15px) scale(1)",offset:0.3}),
                style({opacity:0.6,transform:"translateX(30px) scale(1.3)",offset:0.6}),
                style({opacity:1,transform:"translateX(0) scale(1)",offset:1})
            ]))
        ]),{optional:true}),
        query("#generalforecastId",stagger("1000ms",[
            animate("1s ease-in",keyframes([
                style({opacity:0,offset:0}),
                style({opacity:0.3,offset:0.3}),
                style({opacity:0.6,offset:0.6}),
                style({opacity:1,offset:1})
            ]))
        ]),{optional:true})
    ])
]);