import { Component, Input } from '@angular/core';
import { BlogPost } from './blog.post';

@Component({
    selector: 'blog-post',
    templateUrl: './blog.post.component.html'
})
export class BlogPostComponent {
    @Input() blogPost:BlogPost
}