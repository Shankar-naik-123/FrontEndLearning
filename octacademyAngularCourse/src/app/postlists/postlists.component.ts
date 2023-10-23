import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-postlists',
  templateUrl: './postlists.component.html',
  styleUrls: ['./postlists.component.css'],
  //providers:[PostService]
})
export class PostlistsComponent {
  posts: any[];

  constructor(p:PostService)
  {
    this.posts=p.PostList;
  }

}
