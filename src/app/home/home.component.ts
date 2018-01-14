import { Component, OnInit } from '@angular/core';
import { BlogPost } from './../blog.post/blog.post';
import * as moment from 'moment';
import { BlogPostService } from 'app/blog.post/blog.post.service';

@Component({
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    blogPosts: BlogPost[];

    constructor(private blogPostService: BlogPostService) {}

    ngOnInit(): void {
        this.blogPosts = [];
        
        this.blogPostService.getRecentBlogPosts(10).subscribe((data) => {
            this.blogPosts = data;
            //console.log(data);
        });
    }
    
}