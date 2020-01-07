import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { CoursesComponent } from 'src/courses/courses.component';
import { CoursesComponent } from 'src/coursesV1/course.component';
import { CoursesService } from './courses.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { SignupFormComponent } from 'src/signup-form/signup-form.component';
import { NewCourseComponent } from 'src/new-course-form/new-course-from.component';
import { HttpModule } from '@angular/http';
import { PostComponent } from 'src/http-post-demo/post.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavoriteComponent,
    SignupFormComponent,
    NewCourseComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
