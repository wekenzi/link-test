import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { WebsiteDataService } from 'src/app/shared/services/website-data.service';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  routeSub: Subscription;

  blog:Blog;
  blogId:number;
  categories:Category[]=[];
  realtedBlogs = [
    {id:1, text:'New Artificial Intelligence Apps', img:'related1.jpg'},
    {id:2, text:'Technology Development Seminar', img:'related2.jpg'},
    {id:3, text:'Next Step Of IOT [Internet Of Things]', img:'related1.jpg'}
  ];

  constructor(
    private websiteData:WebsiteDataService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // Get The Id from URL
    this.routeSub = this.route.params
    .pipe(takeUntil(this.destroy$))
    .subscribe(params => {
      this.blogId = params['id'];
    });

    // Get The Blog Data
    this.websiteData.getBlogById(this.blogId)
    .pipe(takeUntil(this.destroy$))
    .subscribe(data=> {
      console.log(data);
      this.blog = data;
    },err => {
      
    })

    // Get Categories
    this.websiteData.getCategories()
    .pipe(takeUntil(this.destroy$))
    .subscribe(data=> {
      console.log(data);
      this.categories = data;
    },err => {
      
    })
    

  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
