"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
//import * as io from 'socket.io-client';
var HomeComponent = (function () {
    function HomeComponent(_RealtimeService, auth) {
        this._RealtimeService = _RealtimeService;
        this.auth = auth;
        this.objectKeys = Object.keys;
        this.title = 'Realtime Data';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.posts = new Array();
        this._RealtimeService.on('sensor_status', function (data) {
            updateData(data, _this.posts);
            getMaxOfArray(numArray);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
function updateData(source, destination) {
    var found = [];
    for (var i in source) {
        found.push(false);
        for (var j in destination) {
            if (source[i].mac == destination[j].mac) {
                //desArr.find(i);
                console.log("Found " + source[i].mac + " at " + j + " ... updating values");
                destination[j] = source[i];
                found[i] = true;
            }
        }
        if (found[i] == false) {
            console.log("Adding new sensor data for " + source[i].mac);
            destination.push(source[i]);
        }
    }
}
;
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
/*existsIn(value, srcArr){
  src
}
addData(){
  
}
addData(){
  
}*/ 
