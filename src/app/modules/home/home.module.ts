import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from "src/app/shared/shared.module";

import { MatButtonModule } from '@angular/material/button';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    BaseLayoutComponent,
    HomeSliderComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    MatButtonModule,
    SharedModule
  ]
})
export class HomeModule { }
