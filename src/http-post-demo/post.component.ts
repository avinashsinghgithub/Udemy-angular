import { Component, Input, OnInit } from "@angular/core";
import { PostService } from "src/app/services/post.service";

@Component({
    selector:'post',
    templateUrl:'post.component.html'
})
export class PostComponent implements OnInit{
    posts:any[];
    
    constructor (private service: PostService){
    }
    ngOnInit(){
       this.service.getPost().
       subscribe(response =>{
        this.posts=response.json();
      } );
    }
    createPost(input:HTMLInputElement){
        let post:any= {title:input.value};
        input.value='';
        this.service.createPost(post).
        subscribe(response=>{
            post.id=response.json().id;
            this.posts.splice(0,0,post);
            console.log(response.json());
        });
    }
    updatePost(post){
        this.service.updatePost(post)
        .subscribe(response=>{
            console.log(response.json());
        });
    }
    deletePost(post){
        this.service.deletePost(post.id)
        .subscribe(response=>{
            let index = this.posts.indexOf(post);
            this.posts.splice(index,1);
        });
    }
}