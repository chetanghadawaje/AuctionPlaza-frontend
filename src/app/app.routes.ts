import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LiveBidComponent } from './pages/live-bid/live-bid.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"bidLive", component:LiveBidComponent}
];
