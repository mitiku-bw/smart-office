import { Component, PipeTransform, Pipe, ElementRef, OnChanges, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { RealtimeService } from '../services/realtime.service';
import { DecimalPipe } from '@angular/common';
import * as d3 from "d3";

@Component({
  selector: 'app-sensor-view',
  templateUrl: './sensor-view.component.html',
  styleUrls: ['./sensor-view.component.css']
})
export class SensorViewComponent implements OnInit {
  //@ViewChild('progress') private chartContainer: ElementRef;
  @ViewChild('tempChart') private temperatureChart: ElementRef;
  @ViewChild('humChart') private humidityChart: ElementRef;
  @ViewChild('presChart') private pressureChart: ElementRef;
  @ViewChild('luxChart') private luxChart: ElementRef;
  @ViewChild('loudChart') private loudnessChart: ElementRef;

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
  private tempratureData: Array<any>;
  private humidityData: Array<any>;
  
  private posts: Array<any>;
  objectKeys = Object.keys;
  
  title = 'Sensor View';
  chartTitleTem = 'Temperature Chart';
  chartTitleHum = 'Humidity Chart';

  constructor(private element: ElementRef, private _RealtimeService: RealtimeService) { }

  ngOnInit() {
    this.posts = new Array();
    this.tempratureData = [];
    this._RealtimeService.on('sensor_status', (data: any)=>{
      console.log("This is my data: ", data);
      updateData(data, this.posts, this.tempratureData);
      this.selectedLocation = this.posts[0];
      //this.generateBarChart(this.selectedLocation["humidity"]);
      /*for(let sensor of this.posts){
        let temperatures = [sensor.location, sensor.temperature];
        let humidities = [sensor.location, sensor.humidity];
        this.tempratureData.push(temperatures);
        this.humidityData.push(humidities);
      }*/
    })
  }
  
    generateBarChart(selectedLocation){
            // set the dimensions and margins of the graph
            let margin = {top: 5, right: 20, bottom: 30, left: 40};
            let element = this.temperatureChart.nativeElement;
            let chartSize = element.offsetWidth <= element.offsetHeight ? element.offsetWidth : element.offsetHeight;
            let width = chartSize - margin.left - margin.right;
            let height = chartSize - margin.top - margin.bottom;
            
            let start = 0;
            let StartAngle = -0.5 * Math.PI;
            let end = parseFloat(selectedLocation);
    
            let colours = {
            fill: '#' + element.dataset.fillColour,
            track: '#' + element.dataset.trackColour,
            text: '#' + element.dataset.textColour,
            stroke: '#' + element.dataset.strokeColour,
            }

            let radius = 100;
            let border = element.dataset.trackWidth;
            let strokeSpacing = element.dataset.strokeSpacing;
            let endAngle = 0.5*Math.PI;
            /*let p = d3.precisionFixed(0.01)
            let formatText = d3.format("." + p + "f");*/
            let formatText = d3.format('.01%');
            let boxSize = radius * 2;
            let count = end;
            let progress = start;
            let step = end < start ? -0.01 : 0.01;

            //Define the circle
            let circle = d3.arc()
            .startAngle(StartAngle)
            .innerRadius(radius)
            .outerRadius(radius - border);
            

            ////setup SVG wrapper

            //let svg = d3.select(this.element.nativeElement).append('svg')
            let svg = d3.select(element)
            .append('svg')
            .attr('width', boxSize)
            .attr('height', boxSize);

            //plot area

            // ADD Group container
            let g = svg.append('g')
            .attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');
            
            //Setup track
            let track = g.append('g').attr('class', 'radial-progress');
            track.append('path')
            .attr('class', 'radial-progress__background')
            .attr('fill', colours.track)
            .attr('stroke', colours.stroke)
            .attr('stroke-width', strokeSpacing + 'px')
            .attr('d', circle.endAngle(endAngle));
    
            //Add colour fill
            let value = track.append('path')
            .attr('class', 'radial-progress__value')
            .attr('fill', colours.fill)
            .attr('stroke', colours.stroke)
            .attr('stroke-width', strokeSpacing + 'px');
    
            //Add text value
            let numberText = track.append('text')
            .attr('class', 'radial-progress__text')
            .attr('fill', colours.text)
            .attr('text-anchor', 'middle')
            .attr('dy', '-0.5rem');
            
            function update(progress) {
              //update position of endAngle
              value.attr('d', circle.endAngle(StartAngle +  2 * endAngle * progress));
              //update text value
              numberText.text(formatText(progress));
              } 
              
              (function iterate() {
                //call update to begin animation
                update(progress);
                if (count > 0) {
                    //reduce count till it reaches 0
                    count--;
                    //increase progress
                    progress += step;
                    //Control the speed of the fill
                    setTimeout(iterate, 10);
                }
                })();
            }
  
}

function updateData(source, destination, temperature){
  let found = [];
  for(let i in source){
    found.push(false);
    for(let j in destination){
      if( source[i].mac == destination[j].mac ){
        //desArr.find(i);
        console.log("Found " + source[i].mac + " at " + j + " ... updating values");
        destination[j] = source[i];
        temperature[i][1] = source[i].temperature;
        found[i] = true;
      }
    }
    if(found[i] == false){
      console.log("Adding new sensor data for " + source[i].mac);
      destination.push(source[i]);
      temperature.push([source[i].location, source[i].temperature]);
    }
  }
};