import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';


@Injectable()
export class RealtimeService {
    
    eventName = 'sensor_status';
    socket: SocketIOClient.Socket;
    constructor() {
        this.socket = io();
    }
    
    on(eventName: any, callback: any){
        if(this.socket){
            this.socket.on(eventName, function(data: any){
                //console.log(data);
                callback(data);
            });
        }
    };
    
    
    /*emit(eventName: any, data: any){
        if(this.socket){
            this.eventName.emit(eventName, data);
        }
    };
    
    removeListner(eventName: any){
        if(this.socket){
            this.eventName.removeListner(eventName, data);
        }
    };*/
}
