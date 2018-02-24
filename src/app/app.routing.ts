import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {HistoryComponent} from './history/history.component';
import {ChartsComponent} from './charts/charts.component';
import { SensorViewComponent } from './sensor-view/sensor-view.component';
import { CallbackComponent } from './callback/callback.component';


const appRoutes: Routes = [
        {
            path: '',
            component: HomeComponent
        },
        {
            path: 'profile',
            component: ProfileComponent
        },
        {
            path: 'history',
            component: HistoryComponent
        },
        {
            path: 'charts',
            component: ChartsComponent
        },
        {
            path: 'sensor-view',
            component: SensorViewComponent
        },
        {
            path: 'callback',
            component: CallbackComponent
        },
        { path: '**', redirectTo: '' }
    ];
    
    export const appRoutingProviders: any = [];
    
    export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);