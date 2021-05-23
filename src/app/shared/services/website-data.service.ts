import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Blog } from 'src/app/models/blog';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class WebsiteDataService {

  constructor(private http:HttpClient) { }

  getBlogs():Observable<Blog[]>{
    return this.http.get('./assets/newsapi.json').pipe(
      map((x:any)=>x.articles)
    )
  }

  getCategories():Observable<Category[]>{
    return this.http.get('./assets/newsapi.json').pipe(
      map((x:any)=>x.sourceCategory)
    )
  }

  getBlogById(id):Observable<Blog>{
    return this.http.get('./assets/newsapi.json').pipe(
      map((x:any)=>x.articles.find(item => item.id == id))
    )
  }

}
