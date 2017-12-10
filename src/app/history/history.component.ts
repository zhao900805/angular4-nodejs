import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import { CompleterService, CompleterData } from 'ng2-completer';
import {Router} from "@angular/router";
import * as $ from 'jquery';//use jquery in angular4!
import {historyAnimation} from "./historyAnimation";
import {historyAnimation_2} from "./historyAnimation_2";
import {WundergroundService} from "../services/wunderground.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers:[UserService],
  animations:[historyAnimation,historyAnimation_2]
})

export class HistoryComponent implements OnInit {

  AllUers:User[] = [];
  alertMsg:string;
  

  protected searchStr: string;
  protected captain: string;
  protected dataService: CompleterData;
  protected searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];
  protected attributesArray = [
    'url', 'login', 'id', 'score', 'html_url','followers_url',
     'following_url', 'subscriptions_url', 'organizations_url',
     'repos_url','received_events_url','blog','location','email',
     'public_repos','public_gists','followers','following','following',
     'updated_at'
    ];
 

  constructor(private userService:UserService,
              private completerService: CompleterService,
              private router:Router
              ) {
    this.dataService = completerService.local(this.searchData, 'color', 'color');
   }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data=>{
      if(!data.success){
        console.log("failed to get all users");
        this.alertMsg = "You have not saved any users yet!";
      }else{
        this.AllUers = data.users;
        console.log("all users:"+this.AllUers);
      }
    });
  }

  search(){
    console.log("search");
  }

  valueChanged(e:any){
    console.log("valueChanged");
  }

  enter(){
    console.log("enter");
  }

  removeUser(id:number){
    console.log("removeUser");
    console.log("id to be removed:"+id);
    this.router.navigate(["home","users",id]);
  }

  closeAlert(){
    $(".close").click(function(){
      console.log("closeAlert");
      $("#alert1").css("display", "none");//remove the alert element
      $("#alert2").css("display", "none");
    });
  }

  checkCurrentPositionWeather(position:string){
    console.log("we have location:"+position);
    this.router.navigate(["weather",position]);
  }

}
