import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private searchUsersEndPoint ;
  private getUserDetailsEndPoint = "https://api.github.com/users/";
  count_followers:number;
  count_followings:number;

  constructor(private http: Http) { }
 
  getUsersByMultipleInputs(keyword: string,category: string,language:string,sorted:string,order:string) {
    let url;
    if(category=="users"){
      this.searchUsersEndPoint = "https://api.github.com/search/users?q=";
    }
    if(category=="issues"){
      this.searchUsersEndPoint = "https://api.github.com/search/issues?q=";
    }
    if(category=="repositories"){
      this.searchUsersEndPoint = "https://api.github.com/search/repositories?q=";
    }
    if(keyword!=null){
      url = `${this.searchUsersEndPoint}${keyword}`;
    }else{
      url = this.searchUsersEndPoint;
    }
    if(language!=null){
      //url = `${this.searchUsersEndPoint}+language:${language}`;
      url = url + `+language:${language}`;
    }
    if(sorted!=null){
       //url = `${this.searchUsersEndPoint}&sort=${sorted}`;
       url = url + `&sort=${sorted}`;
    }
    if(order!=null){
      //url = `${this.searchUsersEndPoint}&order=${order}`;
      url = url + `&order=${order}`;
    }
    console.log("we have url:"+url);
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }
 
  getDetailsByUserName(username: string) {
    if (username) {
      let url = `${this.getUserDetailsEndPoint}${username}`;
      console.log("we have url for user:"+url);
      return this.http.get(url)
        .map((res: Response) => res.json())
        .catch(this.handleError);
    }
  }
 
  private extractData(res: Response) {
    let body = res.json();
    console.log("extractData:"+body);
    return body.items || {};
  }
 
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
