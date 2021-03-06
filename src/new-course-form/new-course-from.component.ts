import { FormGroup, FormArray, FormControl } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
    selector:'new-course-form',
    templateUrl:'./new-course-form.component.html'
})
export class NewCourseComponent {
    form = new FormGroup({
        topics: new FormArray([])
    });

    addTopic(topic : HTMLInputElement ){
        this.topics.push(new FormControl(topic.value));
        topic.value='';

    }
    get topics(){
        return this.form.get('topics') as FormArray;
    }

    removeTopic(topic:FormControl){
       let  index=this.topics.controls.indexOf(topic);
       this.topics.removeAt(index);
    }
}