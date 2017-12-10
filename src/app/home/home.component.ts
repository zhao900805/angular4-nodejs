import { Component, OnInit } from '@angular/core';
import {GithubService} from "../services/github.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/subject";
import "rxjs/RX";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[GithubService]
})

export class HomeComponent implements OnInit {

  CATEGORIES :Array<string>;
  items:Observable<string[]>;
  private searchTerms:Subject<string>;
  droppedBtns_1:Array<string> = [];
  beingDraggingBtn_1:string;
  keywordArray:string[] = [];
  languageArray:string[] = [];
  ordersArray:string[] = [];
  sortedArray:string[] = [];

  Dragged_keywordArray:string[] = [];

  constructor(private githubService:GithubService,private router: Router) { }

  search(term:string){
    this.searchTerms.next(term);
  }

  ngOnInit() { //we need five inits functions
    //this.InitCategoriesdArray();
    //this.InitOrdersArray();
    //this.InitSortedArray();
    //this.InitKeywordsdArray();
    //this.InitLanguagesdArray();
    //this.droppedBtns_1 = [];
  }

  addDropItem_1(e:any){
    console.log(e);//print name of the element!
    this.beingDraggingBtn_1 = e;
  }

  releaseDrop_1(e:any){
    console.log("e:"+e);
    console.log("releaseDrop_1");
    //e.stopPropagation();
    this.droppedBtns_1.push(this.beingDraggingBtn_1);
    //this.Dragged_keywordArray.push(this.beingDraggingBtn_1);
  }

  removeDropItem(e:any){
    //e.stopPropagation();
    console.log("e:"+e);
    console.log("removeDropItem");
  }

  startDrag_1(){
    console.log("startDrag");
  }

  createKeywordBtn(keyword:string){
    console.log("createBtn");
    console.log(keyword);
    if(keyword!=null){
      //this.keywordArray.push(keyword);
      if(localStorage["myKeywords"]==null){
        console.log("null");
        this.keywordArray.push(keyword);
        localStorage["myKeywords"]=JSON.stringify(this.keywordArray);
      }else{
        console.log("not null");
        this.keywordArray = JSON.parse(localStorage["myKeywords"]);
        this.keywordArray.push(keyword);
        console.log(this.keywordArray);
        localStorage["myKeywords"]=JSON.stringify(this.keywordArray);
      }
    }
  }

  createLanguageBtn(language:string){
    console.log("createLanguageBtn");
    console.log(language);
    if(language!=null){
      //this.languageArray.push(language);
      if(localStorage["myLanguages"]==null){
        console.log("null");
        this.languageArray.push(language);
        localStorage["myLanguages"]=JSON.stringify(this.languageArray);
      }else{
        console.log("not null");
        this.languageArray = JSON.parse(localStorage["myLanguages"]);
        console.log(this.languageArray);
        this.languageArray.push(language);
        console.log(this.languageArray);
        localStorage["myLanguages"]=JSON.stringify(this.languageArray);
      }
    }
  }

  InitCategoriesdArray(){
    console.log("InitCategoriesdArray");
    if(localStorage["myCategories"]==null){
      console.log("null");
      this.CATEGORIES = ["users","issues","repositories"];
      localStorage["myCategories"]=JSON.stringify(this.CATEGORIES);
    }else{
      console.log("not null");
      this.CATEGORIES = JSON.parse(localStorage["myCategories"]);
    }
  }

  InitLanguagesdArray(){
    console.log("InitLanguagesdArray");
    if(localStorage["myLanguages"]==null){
        console.log("null");
        localStorage["myLanguages"]=JSON.stringify(this.languageArray);
      }else{
        console.log("not null");
        this.languageArray = JSON.parse(localStorage["myLanguages"]);
        localStorage["myLanguages"]=JSON.stringify(this.languageArray);
      }
  }

  InitKeywordsdArray(){
    console.log("InitKeywordsdArray");
    if(localStorage["myKeywords"]==null){
        console.log("null");
        localStorage["myKeywords"]=JSON.stringify(this.keywordArray);
      }else{
        console.log("not null");
        this.keywordArray = JSON.parse(localStorage["myKeywords"]);
        localStorage["myKeywords"]=JSON.stringify(this.keywordArray);
      }
  }

  InitOrdersArray(){
    console.log("InitOrdersArray");
    if(localStorage["myOrders"]==null){
      this.ordersArray = ["asc","desc"];
      localStorage["myOrders"]=JSON.stringify(this.ordersArray);
    }else{
      this.ordersArray = JSON.parse(localStorage["myOrders"]);
    }
  }

  InitSortedArray(){
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

  releaseDrop(e:any){
    console.log("releaseDrop");
    console.log(e+"is released!");
    /*let index = this.itemsToDrop.indexOf(event);
  	if (index >= 0){
  		this.itemsToDrop.splice(index,1);
  	}*/
  }

  goToUser(){
    console.log("goToUser");
    this.router.navigate(["home/users"]);
  }

  goToRepository(){
    console.log("goToRepository");
    this.router.navigate(["home/repositories"]);
  }

  goToIssue(){
    console.log("goToIssue");
    this.router.navigate(["home/issues"]);
  }

}
