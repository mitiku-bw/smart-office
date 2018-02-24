//import { Component, OnInit } from '@angular/core';
//import { Component, ElementRef, OnInit, ViewEncapsulation } from "@angular/core";
import { Component, PipeTransform, Pipe, ElementRef, OnChanges, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../services/data.service';
import * as d3 from "d3";

@Component({
  selector: 'app-charts',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  private tempratureData: Array<any>;
  private humidityData: Array<any>;
  private pressureData: Array<any>;
  private illuminationData: Array<any>;
  private loudnessData: Array<any>;
  /*@ViewChild('barChart') private chartContainer: ElementRef;*/
  /*data = [
            {location: '183 Sensor-0',temperature:33},
            {location: 'c06 Sensor-1',temperature:12},
            {location: '580 Sensor-2',temperature:41},
            {location: '386 Sensor-3',temperature:16},
            {location: 'f05 Sensor-4',temperature:39},
            {location: '605 Sensor-5',temperature:29}
        ];*/
  
  locationName: string = '';
  selectedLocation: Object = {};
  data = [];
  //posts = [];
  title = "Charts";
  //Title of the charts
  chartTitleTem = 'Temperature (°C)';
  chartTitleHum = 'Humidity (%)';
  chartTitlePre = 'Pressure (bar)';
  chartTitleIll = 'Illumination (lx)';
  chartTitleLou = 'Loudness (dB)';

  //constructor(private element: ElementRef, private sensorData: DataService) { }
  constructor(private sensorData: DataService) { }

  ngOnInit() {
    /* The chart is rendered here. */
    this.sensorData.getSensorData().subscribe((posts) => {
      this.tempratureData = [];
      this.humidityData = [];
      this.pressureData = [];
      this.illuminationData = [];
      this.loudnessData = [];
  
      delete posts[0]._id; //removes the _id : value pair leaving the object with sensor records only
      
      for(let key in posts[0]){
        let temperatures = [key, posts[0][key].readings[0].ambientTemperature];
        let humidities = [key, posts[0][key].readings[0].humidity];
        let pressures = [key, posts[0][key].readings[0].pressure];
        let illuminations = [key, posts[0][key].readings[0].lux];
        let loudnesses = [key, posts[0][key].readings[0].loudness];

        this.tempratureData.push(temperatures);
        this.humidityData.push(humidities);
        this.pressureData.push(pressures);
        this.illuminationData.push(illuminations);
        this.loudnessData.push(loudnesses);
      }
    });
  }
  
}