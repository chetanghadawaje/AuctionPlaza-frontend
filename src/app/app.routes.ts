import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LiveBidComponent } from './pages/live-bid/live-bid.component';
import { UserComponent } from './pages/user/user.component';
import { Component, NgModule } from '@angular/core';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
    {path:"", component:MainComponent},
    {path:"bidLive", component:LiveBidComponent},
    {path: "user", component:UserComponent}
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}