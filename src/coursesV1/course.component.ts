import { Component } from "@angular/core";

@Component({
    selector:'courses',
    templateUrl:'./course.component.html'
})
export class CoursesComponent{

    //courseName:string;
    courseCategory=[
        { id:1,name:'art'},
        {id:2,name:'science'}
    ];
    contactMethods=[
        { id:1,name:'Email'},
        {id:2,name:'Phone'}
    ];

    log(f:any){
        console.log(f);
    }

    submit(f){
        console.log(f);
    }
}