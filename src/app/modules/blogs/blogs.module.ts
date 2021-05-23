import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "src/app/shared/shared.module";

import { MatButtonModule } from '@angular/material/button';
import { BlogsRoutingModule } from './blogs-routing.module';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';


@NgModule({
  declarations: [
    BaseLayoutComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    SharedModule,
    MatButtonModule
  ]
})
export class BlogsModule { }
