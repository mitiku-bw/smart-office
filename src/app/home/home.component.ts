import { Component, OnInit } from '@angular/core';
import { RealtimeService } from '../services/realtime.service';
import {Auth} from '../services/auth.service';
import { DecimalPipe } from '@angular/common';
//import * as io from 'socket.io-client';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private posts: Array<any>;
  MinAndMax: Object = {};
  objectKeys = Object.keys;
  
  title = 'Realtime Data';
  
  constructor(private _RealtimeService: RealtimeService, public auth: Auth) { }

  ngOnInit() {
    this.posts = new Array();
    this._RealtimeService.on('sensor_status', (data: any)=>{
      updateData(data, this.posts);
      this.MinAndMax = {
        "maxTemperature": getMaxOf(getReadings(this.posts).temperatureArray), 
        "minTemperature": getMinOf(getReadings(this.posts).temperatureArray),
        "maxHumidity": getMaxOf(getReadings(this.posts).humidityArray), 
        "minHumidity": getMinOf(getReadings(this.posts).humidityArray)
      };
    })
  }
}

function updateData(source, destination){
  let found = [];
  for(let i in source){
    found.push(false);
    for(let j in destination){
      if( source[i].mac == destination[j].mac ){
        //desArr.find(i);
        console.log("Found " + source[i].mac + " at " + j + " ... updating values");
        destination[j] = source[i];
        found[i] = true;
      }
    }
    if(found[i] == false){
      console.log("Adding new sensor data for " + source[i].mac);
      destination.push(source[i]);
    }
  }
};

function getReadings(sensorList){
  let temperatureArray = [];
  let humidityArray = [];
  for(let item of sensorList){
    //console.log("Testing: ", item);
    temperatureArray.push(item.temperature);
     humidityArray.push(item.humidity);
  }
  return {"temperatureArray": temperatureArray, "humidityArray":humidityArray};
}
function getMaxOf(numArray) {
  return Math.max.apply(null, numArray);
}
function getMinOf(numArray) {
  return Math.min.apply(null, numArray);
}


/*existsIn(value, srcArr){
  src
}
addData(){
  
}
addData(){
  
}*/