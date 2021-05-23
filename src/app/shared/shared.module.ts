import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { CategoryPipe } from './services/category.pipe';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ChangeColorHoverDirective } from './services/change-color-hover.directive';
import { RealtedBolgComponent } from './components/realted-bolg/realted-bolg.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    BlogCardComponent,
    CategoryPipe,
    BlogsComponent,
    ChangeColorHoverDirective,
    RealtedBolgComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [BlogCardComponent, CategoryPipe, BlogsComponent, ChangeColorHoverDirective, RealtedBolgComponent]
})
export class SharedModule { }
