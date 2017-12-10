import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Rx';//use RX instead of Observable!
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {User} from "../models/user";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http:Http) { }

  createNewUser(user:User):Observable<any>{
    let newUser:User ;
    console.log("we have user login:"+user.login);
    console.log(user.repos_url);
    newUser = new User(
      user.avatar_url,
      user.url,
      user.login,
      user.id,
      user.score,
      user.html_url,
      user.followers_url,
      user.following_url,
      user.subscriptions_url,
      user.organizations_url,
      user.repos_url,
      user.received_events_url,
      user.blog,
      user.location,
      user.email,
      user.public_repos,
      user.public_gists,
      user.followers,
      user.following,
      user.created_at,
      user.updated_at,
      user.tags
    );
    //let body = JSON.stringify({"login":user.login});//succeed!
    let body = JSON.stringify({"newUser":newUser});//req.body.newUser.login(url,id)!!
    let headers = new Headers({"Content-type":"application/json"});
    let options = new RequestOptions({headers:headers});
    return this.http.post("/home/users",body,options).map(res=>res.json());
  }

  getUserById(id:number):Observable<any>{
    console.log("getUserById");
    let headers = new Headers({"Content-type":"application/json"});
    let options = new RequestOptions({headers:headers});
    let body = JSON.stringify({"id":id});
    return this.http.post("/home/users/:id",body,options).map(res=>res.json());
  }

  getAllUsers():Observable<any>{
    console.log("getAllUsers");
    let headers = new Headers({"Content-type":"application/json"});
    let options = new RequestOptions({headers:headers});
    let body = JSON.stringify({});
    return this.http.post("/history",body,options).map(res=>res.json());
  }

  removeUserById(id:number):Observable<any>{
    console.log("removeUserById");
    console.log("id to be deleted:"+id);
    let headers = new Headers({"Content-type":"application/json"});
    let options = new RequestOptions({headers:headers});
    return this.http.delete("/home/users/"+id).map(res=>res.json());
  }

  updateUserById(id:number,newUser:User):Observable<any>{
    console.log("updateUserById");
    console.log("id to be updated:"+id);
    let headers = new Headers({"Content-type":"application/json"});
    let options = new RequestOptions({headers:headers});
    let body = JSON.stringify({"user":newUser});
    return this.http.put("/home/users/"+id,body,options).map(res=>res.json());
  }

  getUsersByTag(tag:string):Observable<any>{
    console.log("getUsersByTag");
    console.log("tag to be found:"+tag);
    let headers = new Headers({"Content-type":"application/json"});
    let options = new RequestOptions({headers:headers});
    let body = JSON.stringify({"tag":tag});
    return this.http.post("/home/users/tag/"+tag,body,options).map(res=>res.json());
  }

}
