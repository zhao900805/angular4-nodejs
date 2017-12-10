import {group,trigger,transition,state,animate,style,query,stagger,keyframes} from "@angular/animations";

export let btnAnimation = trigger("btnAnimation",[
    transition("*=>*",[
        style({
            opacity:0,
            transform:"translateX(-100%)"
        }),
        group([
            animate("1s ease-in",keyframes([
                style({opacity:0,offset:0}),
                style({opacity:0.3,offset:0.3}),
                style({opacity:0.6,offset:0.6}),
                style({opacity:1,offset:1})
            ])),
            animate("1s ease-in",keyframes([
                style({transform:"translateX(-100%)",offset:0}),
                style({transform:"translateX(15px)",offset:0.3}),
                style({transform:"translateX(30px)",offset:0.6}),
                style({transform:"translateX(0)",offset:1})
            ]))
        ]),
        /*query("button",style({opacity:0}),{optional:true}),
        query("button",stagger("100ms",[
            animate("1s ease-in",keyframes([
                style({opacity:0,transform:"translateX(-100%)",offset:0}),
                style({opacity:0.3,transform:"translateX(15px)",offset:0.3}),
                style({opacity:0.6,transform:"translateX(30px)",offset:0.6}),
                style({opacity:1,transform:"translateX(0)",offset:1})
            ]))
        ]),{optional:true})*/
    ])
]);