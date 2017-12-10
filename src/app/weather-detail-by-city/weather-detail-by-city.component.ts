import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import { CompleterService, CompleterData } from 'ng2-completer';
import {Router,ActivatedRoute} from "@angular/router";
import * as $ from 'jquery';//use jquery in angular4!
import {WundergroundService} from "../services/wunderground.service";
import {WeatherByCityAnimation} from "./weatherByCityAnimation";
import {weatherByCityAnimationTitle} from "./weatherByCityAnimationTitle";
import {weatherAnimation_2} from "./weather-detail-by-city.animation";

@Component({
  selector: 'app-weather-detail-by-city',
  templateUrl: './weather-detail-by-city.component.html',
  styleUrls: ['./weather-detail-by-city.component.css'],
  providers:[WundergroundService],
  animations:[WeatherByCityAnimation,
              weatherByCityAnimationTitle,
              weatherAnimation_2]

})
export class WeatherDetailByCityComponent implements OnInit {

  weathers:any;
  generalforecast:any;
  hourlyforecast:any;
  tendaysforecast:any;

  city:string;
  state:string;

  constructor(private wundergroundService:WundergroundService,
              private route:ActivatedRoute,
              ) { }

  ngOnInit() {
    let position = this.route.snapshot.params["position"];
    this.city = position.split(",")[0];
    this.state = position.split(",")[1];
    console.log("current state:"+this.state);
    console.log("current city:"+this.city);
    console.log("location now is:"+position);
    this.wundergroundService.getInfoByCityAndState(this.state,this.city).subscribe((weathers:any)=>{
      console.log(weathers);
      this.weathers = weathers;
    });
  }

  generalForecast(){
    if(this.generalforecast!=null){
      $("#generalforecastId").hide();
      this.generalforecast = null;
    }else{
      this.wundergroundService.getForecastByCityAndStat(this.state,this.city).subscribe((forecast:any)=>{
      this.generalforecast = forecast.forecast.simpleforecast.forecastday;
      });
    }
    
  }

  hourlyForecast(){
    if(this.hourlyforecast!=null){
      $("#hourlyforecastId").hide();
      this.hourlyforecast = null;
    }else{
      this.wundergroundService.hourlyForecast(this.state,this.city).subscribe((forecast:any)=>{
      console.log(forecast);//index from 0-35
      console.log(forecast.hourly_forecast[0].FCTTIME.civil); //time 
      console.log(forecast.hourly_forecast[0].condition);
      console.log(forecast.hourly_forecast[0].icon_url);
      this.hourlyforecast = forecast.hourly_forecast;
      });
    }
  }

  tenDaysForecast(){
    if(this.tendaysforecast!=null){
      $("#").hide();
      this.tendaysforecast = null;
    }else{
      this.wundergroundService.tenDaysForecast(this.state,this.city).subscribe((forecast:any)=>{
        console.log(forecast);
        this.tendaysforecast = forecast;
      });
    }
  }

  history(){

  }

}
