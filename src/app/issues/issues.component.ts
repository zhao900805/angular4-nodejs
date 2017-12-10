import { Component, OnInit } from '@angular/core';
import {GithubService} from "../services/github.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/subject";
import "rxjs/RX";
import {Router} from "@angular/router";
import {User} from "../models/user";

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
  providers:[GithubService]
})

export class IssuesComponent implements OnInit {

  keywordArray:string[] = [];
  languageArray_1:string[];
  languageArray_2:string[];
  sortedArray:string[] = [];
  orderArray:string[] = [];

  dragged_languageArray:string[] = [];
  dragged_sortedArray:string[] = [];
  dragged_orderArray:string[] = [];

  user_from_api:any;

  constructor(private githubService:GithubService,private router: Router) { }

  ngOnInit() {
    this.InitLanguagesdArray();
    this.InitSortedArray();
    this.InitOrdersArray();
  }

  newKeywordBtn(keyword:string):void{
    console.log("newKeywordBtn");
    console.log(keyword);
    this.keywordArray.push(keyword);
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
    this.dragged_languageArray.push(e);
  }

  releaseDrop_sort(e:any):void{
    console.log("releaseDrop_sort");
    this.dragged_sortedArray.push(e);
  }

  releaseDrop_order(e:any):void{
    console.log("releaseDrop_order");
    this.dragged_orderArray.push(e);
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
    console.log("go");
    console.log(this.keywordArray[0]);
    console.log(this.dragged_languageArray[0]);
    console.log(this.dragged_orderArray[0]);
    console.log(this.dragged_sortedArray[0]);
    this.startGithubApi(this.keywordArray[0],"issues",this.dragged_languageArray[0],this.dragged_orderArray[0],this.dragged_sortedArray[0]);
  }

  startGithubApi(keyword:string,category:string,language:string,sorted:string,order:string):void{
    console.log("startGithubApi");
    this.githubService.getUsersByMultipleInputs(keyword,category,language,sorted,order).subscribe(
      users => {
          this.user_from_api = users;
          console.log(users[0].url);
          console.log(users[0].repository_url);
          console.log(users[0].labels_url);
          console.log(users[0].comments_url);
          console.log(users[0].events_url);
          
      });
  }

  saveBtn(){
    console.log("saveBtn");
  }

}
