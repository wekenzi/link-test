import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('src/app/modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'blogs',
    loadChildren: () => import('src/app/modules/blogs/blogs.module').then((m) => m.BlogsModule),
  },
  {
    path: 'single-blog',
    loadChildren: () => import('src/app/modules/single-blog/single-blog.module').then((m) => m.SingleBlogModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
