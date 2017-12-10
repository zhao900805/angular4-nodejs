import { Injectable } from '@angular/core';
import {Http,Headers, Response} from "@angular/http";
import {Weather} from "../models/weather";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class WundergroundService {

  myApiKey:string = "33ff2c5fb2752e9c";
  basic_url:string = "http://api.wunderground.com/api/";
  constructor(private http:Http){ }

  getInfoByCityAndState(state:string,city:string){
    state = state.replace(/\s/g, '')
    console.log(state);
    console.log(city);
    let newUrl = this.basic_url+this.myApiKey+'/conditions/q/'+state+'/'+city+'.json';
    console.log("we have newUrl: "+ newUrl);
    return this.http.get(newUrl).map((res:Response)=>res.json());
  }

  getForecastByCityAndStat(state:string,city:string){
    let newUrl = this.basic_url+this.myApiKey+'/forecast/q/'+state+'/'+city+'.json';
    console.log("we have newUrl: "+ newUrl);
    return this.http.get(newUrl).map((res:Response)=>res.json());
  }

  hourlyForecast(state:string,city:string){
    let newUrl = this.basic_url+this.myApiKey+'/hourly/q/'+state+'/'+city+'.json';
    console.log("we have newUrl: "+ newUrl);
    return this.http.get(newUrl).map((res:Response)=>res.json());
  }

  tenDaysForecast(state:string,city:string){
    let newUrl = this.basic_url+this.myApiKey+'/forecast10day/q/'+state+'/'+city+'.json';
    console.log("we have newUrl: "+ newUrl);
    return this.http.get(newUrl).map((res:Response)=>res.json());
  }

  history(state:string,city:string){
    
  }

}
