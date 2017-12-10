import { Component, OnInit } from '@angular/core';
import {GithubService} from "../services/github.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/subject";
import {Router,ActivatedRoute} from "@angular/router";
import {User} from "../models/user";
import { Http, Headers } from '@angular/http';
import {UserService} from "../services/user.service";
import 'rxjs/add/operator/map';
import {MatTableDataSource} from '@angular/material';
import 'rxjs/add/operator/toPromise';
import * as $ from 'jquery';//use jquery in angular4!
import { forkJoin } from "rxjs/observable/forkJoin";
import {userByIdAnimation} from "./userByIdAnimation";

@Component({
  selector: 'app-user-by-id',
  templateUrl: './user-by-id.component.html',
  styleUrls: ['./user-by-id.component.css'],
  providers:[GithubService,UserService],
  animations:[userByIdAnimation]
})

export class UserByIdComponent implements OnInit {

  userById:User;
  dataSource:any;
  USER = [];
  currUser:any;

  saved_flag:boolean = false;
  failed_flag:boolean  =false;
  saved_flag_tag:boolean = false;
  failed_flag_tag:boolean = false;
  duplicate_flag_tag:boolean = false;

  constructor(
    private activated:ActivatedRoute,
    private githubService:GithubService,
    private router: Router,
    private userService:UserService,
    ) { }

  ngOnInit() {
    let curr_id = this.activated.snapshot.params["id"];//use snapshot!!!!
    this.userService.getUserById(curr_id).toPromise().then(data=>{
      this.userById = data.user;//data:{success:true,user:user}
      console.log("current tags is:"+this.userById.tags);
      console.log("current tags is:"+this.userById.tags[0]);
       this.currUser = 
        {
          "avatar_url":this.userById.avatar_url,
          "url":this.userById.url,
          "login":this.userById.login,
          "id":this.userById.id,
          "score":this.userById.score,
          "html_url":this.userById.html_url,
          "followers_url":this.userById.followers_url,
          "following_url":this.userById.following_url,
          "subscriptions_url":this.userById.subscriptions_url,
          "organizations_url":this.userById.organizations_url,
          "repos_url":this.userById.repos_url,
          "received_events_url":this.userById.received_events_url,
          "blog":this.userById.blog,
          "location":this.userById.location,
          "email":this.userById.email,
          "public_repos":this.userById.public_repos,
          "public_gists":this.userById.public_gists,
          "followers":this.userById.followers,
          "following":this.userById.following,
          "created_at":this.userById.created_at,
          "updated_at":this.userById.updated_at,
          "comment":this.userById.comment,
          "tags":this.userById.tags
        };
    }); 
  }

  removeUser(){
    console.log("removeUser");
    let curr_id = this.activated.snapshot.params["id"];//use snapshot!!!!
    console.log("id to be deleted:"+curr_id);
    this.userService.removeUserById(curr_id).subscribe((data:any)=>{
      if(data.success){
        console.log("success deleted!");
        this.router.navigate(["history"]);
      }else{
        console.log("failed deleted!");
      }
    });
  }

  saveComment(id:number,comment:string):void{
    console.log("saveComment");
    this.currUser.comment = comment;
    this.userService.updateUserById(id,this.currUser).subscribe((data:any)=>{
      if(data.success){
        this.saved_flag = true;
        console.log("success updated!");
        this.router.navigate(["home","users",this.currUser.id]);
        //console.log(this.currUser.login);
      }else{
        this.failed_flag = true;
        console.log("failed udpated!");
      }
    });
  }

  closeAlert(){
    $(".close").click(function(){
      console.log("closeAlert");
      $("#aler1").css("display", "none");//remove the alert element
      $("#aler2").css("display", "none");
      $("#aler3").css("display", "none");
      $("#aler4").css("display", "none");
      $("#aler5").css("display", "none");
    });
  }

  addNewTag(id:number,newTag:string){
    console.log("addNewTag");
    if(this.checkDuplicateTag(newTag)){
      console.log("unique tag!");
      this.duplicate_flag_tag = false;
      this.currUser.tags.push(newTag);
      this.userService.updateUserById(id,this.currUser).subscribe((data:any)=>{
        if(data.success){
          this.saved_flag_tag = true;
          console.log("success updated!");
          this.router.navigate(["home","users",this.currUser.id]);
          //console.log(this.currUser.login);
        }else{
          this.failed_flag_tag = true;
          console.log("failed udpated!");
        }
      });
    }else{
      this.duplicate_flag_tag = true;
      console.log("found duplicate tag!");
    }
  }

  checkDuplicateTag(newTag:string):boolean{
    return !this.currUser.tags.includes(newTag);
  }
}

  



/*import { Component, OnInit } from '@angular/core';
import {GithubService} from "../services/github.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/subject";
import {Router,ActivatedRoute} from "@angular/router";
import {User} from "../models/user";
import { Http, Headers } from '@angular/http';
import {UserService} from "../services/user.service";
import 'rxjs/add/operator/map';
import {MatTableDataSource} from '@angular/material';
import 'rxjs/add/operator/toPromise';
import * as $ from 'jquery';//use jquery in angular4!
import { forkJoin } from "rxjs/observable/forkJoin";

@Component({
  selector: 'app-user-by-id',
  templateUrl: './user-by-id.component.html',
  styleUrls: ['./user-by-id.component.css'],
  providers:[GithubService,UserService]
})

export class UserByIdComponent implements OnInit {

  //dataSource:any;
  displayedColumns:string[] = [];
  USER :User[] = [];

  constructor(private activated:ActivatedRoute,private githubService:GithubService,private router: Router,private userService:UserService) {
    console.log(this.USER);
   }

   ngOnInit() {
     let curr_id = this.activated.snapshot.params["id"];
     this.userService.getUserById(curr_id).subscribe((res)=>{
        console.log(res.user);
        this.USER.push(res.user);
        console.log(this.USER);
        this.dataSource = new MatTableDataSource(this.USER);
     })
     //this.dataSource = new MatTableDataSource(this.USER);
     console.log(this.USER);//same as inside!
   }
    dataSource = new MatTableDataSource(this.USER);//ts:User<--->html:user

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];*/

