// we use this import in service only if we want to register this service using injectable decorator to work in DI

import { Injectable } from "@angular/core";
import { Post } from "../models/post";



export class PostService{
    //by this we are saying that we are injecting this at root level so any component can use this.
    // @Injectable({
    //     providedIn:"root" ,
    // })

    PostList:Array<Post>=[
        {postId:1,postTitle:'Post1'},
        {postId:2,postTitle:'Post2'},
        {postId:3,postTitle:'Post3'},
        {postId:4,postTitle:'Post4'}
    ];
}