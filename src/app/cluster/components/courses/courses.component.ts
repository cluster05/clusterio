import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/constant/interface/course.interface';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'cluster-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {

  courses: Course[] = [];
  subscription: Subscription = new Subscription();

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.courseService
      .readAllCourse().subscribe(
        response => this.courses = response,
        error => alert(error.error.message)
      );
  }

  navigateToCourse(courseIdType: any): void {
    const courseId = courseIdType as string;
    this.router.navigate(['./', courseId], { relativeTo: this.route });

  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
