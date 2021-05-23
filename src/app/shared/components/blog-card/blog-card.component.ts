import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  @Input() blog:Blog;
  @Input() categories:Category[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.blog);
  }

  navigateToBlog(id){
    this.router.navigate(['single-blog/', id]);
  }

}
