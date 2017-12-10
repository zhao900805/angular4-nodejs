import {trigger,transition,state,animate,style,query,stagger,keyframes} from "@angular/animations";

export let tagAnimation = trigger("tagAnimation",[
    transition("*=>*",[
        query(".usersContainer",style({opacity:0}),{optional:true}),
        query(".usersContainer",stagger("100ms",[
            animate("1s ease-in",keyframes([
                style({opacity:0,transform:"translateY(-100%)",offset:0}),
                style({opacity:0.3,transform:"translateY(15px)",offset:0.3}),
                style({opacity:0.6,transform:"translateY(30px)",offset:0.6}),
                style({opacity:1,transform:"translateY(0)",offset:1})
            ]))
        ]),{optional:true})
    ])
]);