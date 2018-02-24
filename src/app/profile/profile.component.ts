import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import {Auth} from '../services/auth.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  profile: any;
  title = 'Profile';
  constructor(public auth: Auth) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

}

