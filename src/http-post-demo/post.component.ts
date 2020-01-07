import { Http } from "@angular/http";
import { Component, Input } from "@angular/core";

@Component({
    selector:'post',
    templateUrl:'post.component.html'
})
export class PostComponent {
    posts:any[];
    private url = 'https://jsonplaceholder.typicode.com/posts';
    constructor (private http: Http){
        http.get(this.url).
        subscribe(response =>{
          //  console.log(response.json());
          this.posts=response.json();
        } );
    }
    createPost(input:HTMLInputElement){
        let post:any= {title:input.value};
        input.value='';
        this.http.post(this.url,JSON.stringify(post)).
        subscribe(response=>{
            post.id=response.json().id;
            this.posts.splice(0,0,post);
            console.log(response.json());
        });
    }
    updatePost(post){
        this.http.patch(this.url + '/'+post.id,JSON.stringify({isRead:true}))
        .subscribe(response=>{
            console.log(response.json());
        });
    }
    deletePost(post){
        this.http.delete(this.url + '/'+post.id)
        .subscribe(response=>{
            let index = this.posts.indexOf(post);
            this.posts.splice(index,1);
        });
    }
}