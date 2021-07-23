import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DragonComponent } from './componets/dragon/dragon.component';
import { CapsulesComponent } from './componets/capsules/capsules.component';
import { HomeComponent } from './componets/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { FooterComponent } from './componets/footer/footer.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RoadsterComponent } from './componets/roadster/roadster.component';
import { CapsuleComponent } from './componets/capsules/capsule/capsule.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { KmPipe } from './pipe/km.pipe';
import { DataPipe } from './pipe/data.pipe';
import { DragoComponent } from './componets/dragon/drago/drago.component';

const routes:Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'capsule',
    component:CapsulesComponent,
    data:{
      animation:'FilterPage'
    }
  },
  {
    path:'dragon',
    component:DragonComponent
  },
  {
    path:'roadster',
    component:RoadsterComponent
  },
  {
    path:'capsule-detail/:id',
    component:CapsuleComponent
  },
  {
    path:'dragon-detail/:id',
    component:DragoComponent
  }


];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DragonComponent,
    CapsulesComponent,
    HomeComponent,
    FooterComponent,
    RoadsterComponent,
    CapsuleComponent,
    KmPipe,
    DataPipe,
    DragoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
