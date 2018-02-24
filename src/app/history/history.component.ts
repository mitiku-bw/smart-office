import { Component, PipeTransform, Pipe, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  private tempratureData: Array<any>;
  private humidityData: Array<any>;

  /*
  _id: string;
  mac: string;
  objectTemperature: number;
  ambientTemperature: number;
  humidity: number;
  pressure: number;
  lux: number;
  loudness: number;
  location: string;
  office: string;
  read_time: number;
  */
  posts = [];
  objectKeys = Object.keys;
  
  title = 'History';
  chartTitleTem = 'Temperature Chart';
  chartTitleHum = 'Humidity Chart';
  
  //sensors = [];
  constructor(private sensorData: DataService) { 
    /*for(let i = 0; i < 60; i++){
      this.sensors.push(`Location ${i}.0`);
    }*/
  }

  ngOnInit() {
    this.sensorData.getSensorData().subscribe((posts) => {
      this.tempratureData = [];
      this.humidityData = [];
      delete posts[0]._id; //removes the _id : value pair leaving the object with sensor records only
      console.log(posts);
      this.posts = posts;
      for(let key in posts[0]){
        let temperatures = [key, posts[0][key].readings[0].ambientTemperature];
        let humidities = [key, posts[0][key].readings[0].humidity];
        this.tempratureData.push(temperatures);
        this.humidityData.push(humidities);
      }
    });
  }

}

/*
interface Post{
  //id: string;
  mac_address: string;
  objectTemperature: number;
  ambientTemperature: number;
  humidity: number;
  pressure: number;
  lux: number;
  loudness: number;
  location: string;
  office: string;
  read_time: number;
}
*/
