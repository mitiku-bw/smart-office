import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule} from 'ngx-pagination';
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
//import { AUTH_PROVIDERS } from 'angular2-jwt';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { Auth } from './services/auth.service';
import { DataService } from './services/data.service';
import { RealtimeService } from './services/realtime.service';
//import { AuthService } from './services/auth.service';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HistoryComponent } from './history/history.component';
import { ChartsComponent } from './charts/charts.component';
import { BarchartComponent } from './barchart/barchart.component';
import { CallbackComponent } from './callback/callback.component';
import { LinechartComponent } from './linechart/linechart.component';
import { SensorViewComponent } from './sensor-view/sensor-view.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SideNavComponent,
    HistoryComponent,
    ChartsComponent,
    BarchartComponent,
    CallbackComponent,
    LinechartComponent,
    SensorViewComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    NgxPaginationModule,
    routing
  ],
  providers: [
      appRoutingProviders,
      DataService, 
      RealtimeService,
      Auth
      /*AUTH_PROVIDERS,
      AuthService*/
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
