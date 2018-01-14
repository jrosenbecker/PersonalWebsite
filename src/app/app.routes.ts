import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './auth/login.component';
import { CallbackComponent } from 'app/callback.component';
import { CreateBlogPostComponent } from 'app/admin/create/create.blog.post.component';
import { DeleteBlogPostComponent } from 'app/admin/delete/delete.blog.post.component';
import { EditBlogPostComponent } from 'app/admin/edit/edit.blog.post.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent 
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'admin/create',
    component: CreateBlogPostComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'admin/delete',
    component: DeleteBlogPostComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'admin/edit',
    component: EditBlogPostComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class AppRoutingModule { }