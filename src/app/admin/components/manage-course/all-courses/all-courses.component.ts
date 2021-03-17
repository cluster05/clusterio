import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/constant/interface/course.interface';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'cluster-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {

  subscription: Subscription = new Subscription();
  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {

    this.subscription = this.courseService.readAllCourse()
      .subscribe(
        response => this.courses = response,
        error => alert(error.error.message)
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
