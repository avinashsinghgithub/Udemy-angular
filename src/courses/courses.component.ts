import {Component} from '@angular/core';
import { CoursesService } from 'src/app/courses.service';

@Component({
    selector: 'courses',
    templateUrl :'./courses.component.html'
})
export class CoursesComponent{
    constructor(service : CoursesService){
        this.courses= service.getCourses();
    }

    title = " list of courses";
    courses;
    imageUrl="https://time.com/3063984/happy-34th-birthday-harry-potter-youre-way-older-than-we-thought-you-were/";
    colS=2
    isActive=false;
    contactMethods =[
       { id:1,name:"email"},
       {id:2,name:"phone"}
    ];

    submit(f:any)
    {
        console.log(f);
    }
    log(name){
        console.log(name);
    }
}