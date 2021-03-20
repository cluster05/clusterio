import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/constant/interface/course.interface';

@Component({
  selector: 'cluster-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course = {
    title: '',
    description: '',
    content: [],
    courseImageUrl: ''
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCourse(courseIdType: any): void {
    const courseId = courseIdType as string;
    this.router.navigate(['/courses/', courseId]);
  }

}
