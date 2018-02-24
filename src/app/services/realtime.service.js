"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var io = require("socket.io-client");
var RealtimeService = (function () {
    function RealtimeService() {
        this.eventName = 'sensor_status';
        this.socket = io();
    }
    RealtimeService.prototype.on = function (eventName, callback) {
        if (this.socket) {
            this.socket.on(eventName, function (data) {
                //console.log(data);
                callback(data);
            });
        }
    };
    ;
    RealtimeService = __decorate([
        core_1.Injectable()
    ], RealtimeService);
    return RealtimeService;
}());
exports.RealtimeService = RealtimeService;
