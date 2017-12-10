import {trigger,transition,state,animate,style,query,stagger,keyframes} from "@angular/animations";

export let alertAnimation = trigger("alertAnimation",[
    transition("*=>*",[
        query(".alert:enter",style({opacity:0}),{optional:true}),
        query(".alert:enter",stagger("1s",[
            animate("1s ease-in",keyframes([
                style({opacity:0,transform:"translateX(-100%)",offset:0}),
                style({opacity:0.3,transform:"translateX(15px)",offset:0.3}),
                style({opacity:0.6,transform:"translateX(30px)",offset:0.6}),
                style({opacity:1,transform:"translateX(0)",offset:1})
            ]))
        ]),{optional:true}),
        query(".alert:leave",stagger("1s",[
            animate("1s ease-in",keyframes([
                style({opacity:1,transform:"translateX(15px)",offset:0}),
                style({opacity:0.7,transform:"translateX(-50%)",offset:0.3}),
                style({opacity:0.3,transform:"translateX(-75%)",offset:0.6}),
                style({opacity:0,transform:"translateX(-100%)",offset:1})
            ]))
        ]),{optional:true})
    ])
]);