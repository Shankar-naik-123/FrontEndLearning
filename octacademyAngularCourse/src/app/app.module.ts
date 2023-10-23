import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import {FormsModule} from '@angular/forms';
import { Task1Component } from './task1/task1.component';
import { UserDetailsComponent } from './user-details/user-details.component' 
import { AppendCity } from './Pipes/append.pipe';
import { EdittextPipe } from './Pipes/edittext.pipe';
import { PostsComponent } from './posts/posts.component';
import { PostlistsComponent } from './postlists/postlists.component';
import { PostService } from './Services/post.service';
import { EmployeeComponent } from './employee/employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowUsersComponent } from './show-users/show-users.component';
//For Angular Routing 
import { RouterModule } from '@angular/router';
import { SingleuserinfoComponent } from './singleuserinfo/singleuserinfo.component';
import { ImplementObservableComponent } from './implement-observable/implement-observable.component';
import { FournotfourComponent } from './fournotfour/fournotfour.component';
import {HttpClientModule} from  '@angular/common/http'
import { UserAPICallsService } from './Services/user-apicalls.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    Task1Component,
    UserDetailsComponent,
    AppendCity,
    EdittextPipe,
    PostsComponent,
    PostlistsComponent,
    EmployeeComponent,
    ShowUsersComponent,
    SingleuserinfoComponent,
    ImplementObservableComponent,
    FournotfourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'showUsers',
        component:ShowUsersComponent
      },
      {
        path:'updateUserInfo/:email',
        component:SingleuserinfoComponent
      },
      {
        path:'**',
        component:FournotfourComponent
      }
    ])
  ],
  /*commnetd the below line as we register the service in service class itself using Ingectable decorator
  to work with DI*/
  providers: [PostService,UserDetailsComponent,UserAPICallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
