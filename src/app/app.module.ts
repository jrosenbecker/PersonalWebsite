import 'materialize-css';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './app.routes';
import { MarkdownModule } from 'ngx-md';
import { CKEditorComponent } from 'ng2-ckeditor';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './auth/login.component';
import { BlogPostComponent } from './blog.post/blog.post.component';
import { AuthGuard } from 'app/auth/auth.guard';
import { AuthService } from 'app/auth/auth.service';
import { BlogPostService } from './blog.post/blog.post.service';
import { CallbackComponent } from './callback.component';
import { CreateBlogPostComponent } from 'app/admin/create/create.blog.post.component';
import { DeleteBlogPostComponent } from 'app/admin/delete/delete.blog.post.component';
import { EditBlogPostComponent } from 'app/admin/edit/edit.blog.post.component';
import { SideNavComponent } from 'app/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    LoginComponent,
    CallbackComponent,
    BlogPostComponent,
    CreateBlogPostComponent,
    DeleteBlogPostComponent,
    EditBlogPostComponent,
    SideNavComponent,
    CKEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRoutingModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    AuthService,
    BlogPostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
