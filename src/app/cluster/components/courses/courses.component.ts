import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('Clusterdev | Courses');
    meta.addTags([
      { name: 'keywords', content: 'clusterdev courses , course , free course , clusterdev' },
      { name: 'description', content: 'see all the free and high end course offered by clusterdev' },
      { name: 'robots', content: 'course page, courses' }
    ]);
  }

  ngOnInit(): void {
    this.subscription = this.courseService
      .readAllCourse().subscribe(
        response => this.courses = response,
        error => alert(error.error.message)
      );
  }

  navigateToCourse(course: Course): void {
    const courseId = course.id as string;
    const regex = /\ /gi;
    const courseTitle = course.title.replace(regex, '-');
    this.router.navigate(['./', courseId], { relativeTo: this.route, queryParams: { course: courseTitle } });

  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
