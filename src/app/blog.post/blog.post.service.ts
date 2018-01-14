import 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { BlogPost } from './blog.post';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class BlogPostService {

  constructor(private http: HttpClient) { }

  getRecentBlogPosts(numberOfPosts): Observable<BlogPost[]> {
      return this.http.get<BlogPost[]>(`/api/getRecentBlogPosts/${numberOfPosts}`)
  }
}