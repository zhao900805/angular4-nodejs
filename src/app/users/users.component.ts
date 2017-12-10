import { Component, OnInit } from '@angular/core';
import {GithubService} from "../services/github.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/subject";
//import "rxjs/RX";
import {Router} from "@angular/router";
import {User} from "../models/user";
import { Http, Headers } from '@angular/http';
import {UserService} from "../services/user.service";
import 'rxjs/add/operator/map';
import * as $ from 'jquery';//use jquery in angular4!
import {userAnimation} from "./userAnimation";
import {searchInputAnimation} from "./searchInputAnimation";
import {userAlertAnimation} from "./userAlertAnimation";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[GithubService,UserService],
  animations:[userAnimation,searchInputAnimation,userAlertAnimation]
})

export class UsersComponent implements OnInit {

  languageArray_1:string[];
  languageArray_2:string[];
  sortedArray:string[] = [];
  orderArray:string[] = [];

  keywordArray:string[] = [];
  dragged_languageArray:string[] = [];
  dragged_sortedArray:string[] = [];
  dragged_orderArray:string[] = [];

  user_from_api:any;
  alertMsg:number;
  alertMsg2:number;
  newUser:User;

  first:boolean = false;
  second:boolean = false;

  zero_flag:boolean;
  one_flag:boolean;
  two_flag:boolean ;
  three_flag:boolean ;
  four_flag:boolean ;
  total:number ;

  input_animation_flag:string = "inactive";
  alert_animation_flag:string = "inactive";

  constructor(private githubService:GithubService,private router: Router,private userService:UserService) { }

  ngOnInit() {
    this.InitAllFlags();
    this.InitLanguagesdArray();
    this.InitSortedArray();
    this.InitOrdersArray();
  }

  newKeywordBtn(keyword:string):void{
    console.log("newKeywordBtn");
    console.log(keyword);
    if(this.keywordArray.length!=0){
      this.keywordArray = [];
      this.total--;
    }
    this.keywordArray.push(keyword);
    this.total++;
    this.alertHelper();
  }

  InitAllFlags():void{
    this.zero_flag = false;
    this.one_flag = false;
    this.two_flag = false;
    this.three_flag = false;
    this.four_flag = false;
    this.total = 0;
  }

  InitLanguagesdArray():void{
    console.log("InitLanguagesdArray");
    if(localStorage["myLanguages"]==null){
        console.log("null");
        this.languageArray_1 = ["HTML","JAVA","C","C#","C++"];
        this.languageArray_2 = ["Python","CSS","Js","PHP","Ruby"];
        console.log(this.languageArray_1);
        console.log(this.languageArray_2);
        localStorage["myLanguages_1"]=JSON.stringify(this.languageArray_1);
        localStorage["myLanguages_2"]=JSON.stringify(this.languageArray_2);
      }else{
        console.log("not null");
        this.languageArray_1 = JSON.parse(localStorage["myLanguages_1"]);
        this.languageArray_2 = JSON.parse(localStorage["myLanguages_2"]);
      }
  }

  InitSortedArray():void{
    console.log("InitSortedArray");
    if(localStorage["mySorted"]==null){
      console.log("null");
      this.sortedArray = ["states","updated","created"];
      localStorage["mySorted"]=JSON.stringify(this.sortedArray);
    }else{
      console.log("not null");
      this.sortedArray = JSON.parse(localStorage["mySorted"]);
    }
  }

  InitOrdersArray():void{
    console.log("InitOrdersArray");
    if(localStorage["myOrders"]==null){
      this.orderArray = ["asc","desc"];
      localStorage["myOrders"]=JSON.stringify(this.orderArray);
    }else{
      this.orderArray = JSON.parse(localStorage["myOrders"]);
    }
  }

  releaseDrop_lan(e:any):void{
    console.log("releaseDrop");
    if(this.dragged_languageArray.length!=0){
      this.dragged_languageArray = [];
      this.total--;
    }
    this.dragged_languageArray.push(e);
    this.total++;
    this.alertHelper();
  }

  releaseDrop_sort(e:any):void{
    console.log("releaseDrop_sort");
    if(this.dragged_sortedArray.length!=0){
      this.dragged_sortedArray = [];
      this.total--;
    }
    this.dragged_sortedArray.push(e);
    this.total++;
    this.alertHelper();
  }

  releaseDrop_order(e:any):void{
    console.log("releaseDrop_order");
    if(this.dragged_orderArray.length!=0){
      this.dragged_orderArray = [];
      this.total--;
    }
    this.dragged_orderArray.push(e);
    this.total++;
    this.alertHelper();
  }

  addDropItem(e:any):void{
    console.log("addDropItem");
    console.log("e to be removed:"+e);
    let lan1_index = -1;
    let lan2_index = -1;
    let sort_index = -1;
    let order_index = -1;
    for(let i=0;i<this.languageArray_1.length;i++){
      if(e==this.languageArray_1[i]){
        lan1_index = i;
        break;
      }
    }
    for(let i=0;i<this.languageArray_2.length;i++){
      if(e==this.languageArray_2[i]){
        lan2_index = i;
        break;
      }
    }
    for(let i=0;i<this.sortedArray.length;i++){
      if(e==this.sortedArray[i]){
        sort_index = i;
        break;
      }
    }
    for(let i=0;i<this.orderArray.length;i++){
      if(e==this.orderArray[i]){
        order_index = i;
        break;
      }
    }
    console.log(lan1_index+","+lan2_index+","+sort_index+","+order_index);
    if(lan1_index!=-1){
      this.languageArray_1.splice(lan1_index,1);
    }
    if(lan2_index!=-1){
      this.languageArray_2.splice(lan2_index,1);
    }
    if(sort_index!=-1){
      this.sortedArray.splice(sort_index,1);
    }
    if(order_index!=-1){
      this.orderArray.splice(order_index,1);
    }
  }

  go():void{
    console.log("current total is:"+ this.total);
    if(this.total==0){
      console.log("zero_flag!");
      this.input_animation_flag = "active";
      this.zero_flag = true;
      this.alertHelper();
    }else{
      this.input_animation_flag = "active";
      console.log("go");
      console.log(this.keywordArray[0]);
      console.log(this.dragged_languageArray[0]);
      console.log(this.dragged_orderArray[0]);
      console.log(this.dragged_sortedArray[0]);
      $("#smallTable").show();
      this.startGithubApi(this.keywordArray[0],"users",this.dragged_languageArray[0],this.dragged_orderArray[0],this.dragged_sortedArray[0]);
    } 
  }

  startGithubApi(keyword:string,category:string,language:string,sorted:string,order:string):void{
    console.log("startGithubApi");
    this.githubService.getUsersByMultipleInputs(keyword,category,language,sorted,order).subscribe(
      users => {
          this.user_from_api = users;
          console.log(users[0].followers_url);
      });
  }

  saveBtn(user:any){
    console.log("saveBtn");
    console.log(user.url);
    this.githubService.getDetailsByUserName(user.login).subscribe(data=>{
       this.newUser = new User(
          data.avatar_url,
          data.url,
          data.login,
          data.id,
          data.score,
          data.html_url,
          data.followers_url,
          data.following_url,
          data.subscriptions_url,
          data.organizations_url,
          data.repos_url,
          data.received_events_url,
          data.blog,
          data.location,
          data.email,
          data.public_repos,
          data.public_gists,
          data.followers,
          data.following,
          data.created_at,
          data.updated_at,
          [this.keywordArray[0],this.dragged_languageArray[0]]
       );
       console.log(data.login);
       console.log(data.repos_url);
       console.log(data.created_at);
       console.log(data.updated_at);
       this.createNewUser(this.newUser);
    });
    
  }

  createNewUser(newUser:User){
    console.log(newUser.repos_url);
    this.userService.createNewUser(newUser).subscribe(data=>{
      console.log(data.success);
      if(data.success){
        this.alertMsg = newUser.id;
        this.first = true;
        this.second = false;
        //$("#alertDiv").show();
        //$("#alertDiv_2").show();
      }else{
        this.alertMsg2 = newUser.id;
        this.first = false;
        this.second = true;
        console.log("has been saved before!");
        //$("#alertDiv_2").show();
        //$("#alertDiv").hide();
      }
    });
  }

  closeAlert(){
    $(".close").click(function(){
      console.log("closeAlert");
      $("#alertDiv").css("display", "none");//remove the alert element
    });
  }

  reset():void{
    console.log("reset");
    var inputElement = <HTMLInputElement>document.getElementById('keyWordInput');
    inputElement.value = "";
    //this.router.navigate(["home","users"]);
    //window.location.reload();
    this.keywordArray = [];
    this.dragged_languageArray = [];
    this.dragged_sortedArray = [];
    this.dragged_orderArray = [];
    this.ngOnInit();
    
  }

  alertHelper():void{
    console.log("alertHelper");
    if(this.total==0){
      this.zero_flag = true;
      this.alert_animation_flag = "active";
      this.one_flag = false;
      this.two_flag = false;
      this.three_flag = false;
      this.four_flag = false;
      console.log("total:"+this.total);
    }
    if(this.total==1){
      this.alert_animation_flag = "active";
      this.zero_flag = false;
      this.one_flag = true;
      this.two_flag = false;
      this.three_flag = false;
      this.four_flag = false;
      console.log("total:"+this.total);
    }
    if(this.total==2){
      this.alert_animation_flag = "active";
      this.zero_flag = false;
      this.two_flag = true;
      this.one_flag = false;
      this.three_flag = false;
      this.four_flag = false; 
      console.log("total:"+this.total);
    }
    if(this.total==3){
      this.alert_animation_flag = "active";
      this.zero_flag = false;
      this.three_flag = true; 
      this.two_flag = false;
      this.one_flag = false;
      this.four_flag = false;
      console.log("total:"+this.total);
    }
    if(this.total==4){
      this.alert_animation_flag = "active";
      this.zero_flag = false;
      this.four_flag = true; 
      this.two_flag = false;
      this.three_flag = false;
      this.one_flag = false;
      console.log("total:"+this.total);
    }
  }

}
