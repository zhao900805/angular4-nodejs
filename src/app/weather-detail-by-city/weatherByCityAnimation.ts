import {trigger,transition,state,animate,style,query,stagger,keyframes} from "@angular/animations";

export let WeatherByCityAnimation = trigger("weatherByCityAnimationList",[
    transition("*=>*",[
        query("li",style({opacity:0}),{optional:true}),
        query("h1",style({opacity:0}),{optional:true}),
        query("li",stagger("1000ms",[
            animate("1s ease-in",keyframes([
                style({opacity:0,transform:"translateY(-100%)",offset:0}),
                style({opacity:0.3,transform:"translateY(15px)",offset:0.3}),
                style({opacity:0.6,transform:"translateY(30px)",offset:0.6}),
                style({opacity:1,transform:"translateY(0)",offset:1})
            ]))
        ]),{optional:true})
    ])
]);