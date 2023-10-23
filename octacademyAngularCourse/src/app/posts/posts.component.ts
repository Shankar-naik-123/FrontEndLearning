import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  //providers:[PostService]
})
export class PostsComponent {
  posts:Array<any>=[];
  
  /*In below example we are using angular service post.service.ts to get our postlists. so we have 
  implemented angular service but this is not the right way to do that.below are directly creating class object 
  by using new keyword this created tight coupling with angular service. instead of this way we have to perform dependency
  injestion to overcome this tight coupling */
  
  /*constructor()
  {
   let p=new PostService();
   this.posts=p.PostList;
  }*/

  /*using depency injestion  . here we have to register our service in @Component with Providers array.
  by doing this we are telling angualar that these are the service providers for our component*/
  constructor(p:PostService)
  {
    this.posts=p.PostList;
  }
/*But the problem with this way is we are registering our service in component provider
so this will create one instance of service. when we want to inject service in many components 
this will create instance for each components. ex: 100 componets using service will create 100 instance 
of service . this may hinder the performance. we can eliminate this by 2 soln
 1.registering service in App.Module.ts 
which will create single instance in memory once and use that when any component ask for that service via DI 


2. Using Inject decorator in service class.
it's done in service class*/



}
