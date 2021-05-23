import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "src/app/shared/shared.module";

import { SingleBlogRoutingModule } from './single-blog-routing.module';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    BaseLayoutComponent
  ],
  imports: [
    CommonModule,
    SingleBlogRoutingModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class SingleBlogModule { }
