import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user";
import { Http, Headers } from '@angular/http';
import * as $ from 'jquery';//use jquery in angular4!
import {Router} from "@angular/router";
import {tagAnimation} from "./tagAnimation";
import {alertAnimation} from "./alertAnimation";
import {btnAnimation} from "./BtnAnimation";

@Component({
  selector: 'app-tags-manager',
  templateUrl: './tags-manager.component.html',
  styleUrls: ['./tags-manager.component.css'],
  providers:[UserService],
  animations:[tagAnimation,alertAnimation,btnAnimation]
})

export class TagsManagerComponent implements OnInit {

  AllUsers:User[] = [];
  alertMsg:string;
  idFlag:number;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data=>{
      if(!data.success){
        console.log("failed to get all users");
      }else{
        this.AllUsers = data.users;
        console.log("all users:"+this.AllUsers);
      }
    });
  }

  deleteBtn(id:number,index_user:number,index_tag:number):void{
    console.log("deleteBtn");
    console.log(index_user);
    console.log(index_tag);
    console.log(id);
    if(index_tag<=2){
      this.alertMsg = "we need at two tags!";
        this.idFlag = id;
        console.log(this.idFlag);
        this.closeButton();
    }else{
      let currUser = this.AllUsers[index_user];
      let currtags = currUser.tags;
      currtags.splice(index_tag,1);
      currUser.tags = currtags;
      this.userService.updateUserById(id,currUser).subscribe((data:any)=>{
        this.AllUsers = data.users;
        location.reload();
      });
    }
  }

  closeButton(){
    $("#closeBtn").click(function(){
      console.log("closeBtn clicked!");
      $("#zcc").css("display", "none");
    })
  }

}
