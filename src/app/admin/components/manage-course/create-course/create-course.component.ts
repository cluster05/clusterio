import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/constant/interface/course.interface';

@Component({
  selector: 'cluster-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  courseBuilder: Course = {
    title: '',
    description: '',
    courseImageUrl: '',
    content: [],
  }
  courseImageUrl = ''
  courseUpdatingMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  setPostImageURL(imageURL: string) { }

  postCourse(): void { }

}
