import { Component, Input, OnInit } from '@angular/core';
import { WebsiteDataService } from '../../services/website-data.service';
import { Blog } from 'src/app/models/blog';
import { Category } from 'src/app/models/category';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  @Input()isHomePage:boolean;

  blogs:Blog[]=[];
  categories:Category[]=[];

  constructor(private websiteData:WebsiteDataService) { }

  ngOnInit(): void {

    this.websiteData.getBlogs()
    .pipe(takeUntil(this.destroy$))
    .subscribe(data=> {
      console.log(data);
      this.isHomePage ? this.blogs = data.filter(x=>x.showOnHomepage) : this.blogs = data;
    },err => {
      
    })

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
