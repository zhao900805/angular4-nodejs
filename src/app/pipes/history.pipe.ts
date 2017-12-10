import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../models/user";

@Pipe({
  name: 'historyFilter'
})
export class HistoryPipe implements PipeTransform {

  transform(items: User[], searchText: string,attribute:string): User[] {

    let searchTerm:string;

    console.log("We have attribute: "+attribute);
    console.log("We have searchText: "+searchText);
    console.log("We have searchTerm: "+searchTerm);

    if(searchText!=undefined&&attribute!=undefined){
      return items.filter(item =>{
        switch(attribute) { 
          case "url": { 
            console.log("attribute is url"); 
            searchTerm = ""+item.url;
            break; 
          } 
          case "login": { 
            console.log("attribute is login");
            searchTerm = ""+item.login; 
            break; 
          } 
          case "score": {
            console.log("attribute is score"); 
            searchTerm = ""+item.score;
            break;    
          } 
          case "html_url": { 
            console.log("attribute is html_url"); 
            searchTerm = ""+item.html_url;
            break; 
          }
          case "followers_url": { 
            console.log("attribute is followers_url"); 
            searchTerm = ""+item.followers_url;
            break; 
          } 
          case "following_url": { 
            console.log("attribute is following_url");
            searchTerm = ""+item.following_url; 
            break; 
          } 
          case "subscriptions_url": {
            console.log("attribute is subscriptions_url");
            searchTerm = ""+item.subscriptions_url; 
            break;    
          } 
          case "organizations_url": { 
            console.log("attribute is organizations_url"); 
            searchTerm = ""+item.organizations_url;
            break; 
          }
          case "repos_url": { 
            console.log("attribute is repos_url"); 
            searchTerm = ""+item.repos_url;
            break; 
          } 
          case "received_events_url": { 
            console.log("attribute is received_events_url");
            searchTerm = ""+item.received_events_url; 
            break; 
          } 
          case "blog": {
            console.log("attribute is blog");
            searchTerm = ""+item.blog; 
            break;    
          } 
          case "location": { 
            console.log("attribute is location");
            searchTerm = ""+item.location; 
            break; 
          }
          case "email": { 
            console.log("attribute is email"); 
            searchTerm = ""+item.email;
            break; 
          } 
          case "public_repos": { 
            console.log("attribute is public_repos");
            searchTerm = ""+item.public_repos; 
            break; 
          } 
          case "public_gists": {
            console.log("attribute is public_gists");
            searchTerm = ""+item.public_gists; 
            break;    
          } 
          case "followers": { 
            console.log("attribute is followers");
            searchTerm = ""+item.followers; 
            break; 
          }
          case "following": { 
            console.log("attribute is following"); 
            searchTerm = ""+item.following;
            break; 
          } 
          case "created_at": { 
            console.log("attribute is created_at");
            searchTerm = ""+item.created_at; 
            break; 
          } 
          case "updated_at": {
            console.log("attribute is updated_at");
            searchTerm = ""+item.updated_at; 
            break;    
          }                    
        }
        if(searchTerm==undefined){  //issue solved!
          searchTerm = " ";
        }
        if((searchTerm!="")&&(searchTerm).includes(searchText)){   //issue here!!!
            return true;
        }
        return false;
      });
    }else{
      return items;
    } 
  }

}
