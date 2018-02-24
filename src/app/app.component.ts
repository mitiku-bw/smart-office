import { Component, OnInit } from '@angular/core';
import {Auth} from './services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works on cloud 9!';
  profile: any;
  constructor(public auth: Auth) {
    auth.handleAuthentication();
  }
  
  ngOnInit() {
    /*if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }*/
  }
  
}