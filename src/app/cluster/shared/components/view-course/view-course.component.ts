import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/constant/interface/course.interface';
import { Article } from 'src/app/constant/interface/post.interface';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'cluster-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {

  course: Course = {
    title: '',
    description: '',
    courseImageUrl: '',
    content: [],
  };

  articles: Article[] = [];
  constructor(
    private courseSerive: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('courseId') as string;
    if (courseId) {
      this.courseSerive.readCourse(courseId).subscribe(
        response => {
          this.course = response;
          this.articles = this.course.content as Article[];
          this.buildMeta();
        },
        error => alert(error.error.message)
      );
    }
  }

  buildMeta(): void {
    this.title.setTitle('Clusterdev | Course : ' + this.course.title);
    this.meta.addTags([
      { name: 'keywords', content: ` ${this.course.title}` },
      { name: 'description', content: ` this course about the ${this.course.title} and gives knowledge about ${this.course.description}` },
      { name: 'robots', content: ` ${this.course.title} , ${this.course.description}` }
    ]);
  }

  navigateTolesson(post: Article): void {
    const articleId = post.id as string;
    const regex = /\ /gi;
    const buildTitle = post.title.replace(regex, '-');
    this.router.navigate(['./lesson/', articleId], { relativeTo: this.route, queryParams: { title: buildTitle } });

  }

}
