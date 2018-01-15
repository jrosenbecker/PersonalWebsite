import { Component } from '@angular/core';
import { BlogPostService } from 'app/blog.post/blog.post.service';
import { BlogPost } from 'app/blog.post/blog.post';
import * as moment from 'moment';

@Component({
    templateUrl: 'create.blog.post.component.html'
})
export class CreateBlogPostComponent {
    blogPostText: String

    constructor(private blogPostService: BlogPostService) { }

    createBlogPost() {
        console.log('create')
        var blogPost = new BlogPost(0, this.blogPostText, moment(), moment(), moment());
        this.blogPostService.saveBlogPost(blogPost);
    }
}