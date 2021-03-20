import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostType } from 'src/app/constant/enum/post.enum';
import { Course } from 'src/app/constant/interface/course.interface';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'cluster-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  skills = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Angular', 'React', 'Flutter', 'Node', 'Express', 'MySQL', 'MongoDB'];
  skill = '';
  studentCount = 100;
  subscriptions: Subscription = new Subscription();

  articles: Article[] = [];
  snippets: Article[] = [];
  courses: Course[] = [];

  constructor(
    private articlesService: ArticlesService,
    private courseService: CourseService) { }


  ngOnInit(): void {
    this.typeWriterEffect();

    this.subscriptions.add(this.articlesService.readNewArticle(PostType.ARTICLE)
      .subscribe(
        response => this.articles = response,
        error => alert(error.error.message)));
    this.subscriptions.add(this.articlesService.readNewArticle(PostType.SNIPPET)
      .subscribe(
        response => this.snippets = response,
        error => alert(error.error.message)));
    this.subscriptions.add(this.courseService.readNewCourses()
      .subscribe(
        response => this.courses = response,
        error => alert(error.error.message)));
  }

  typeWriterEffect(): void {

    let index = 0;
    let n = 0;
    let up = true;

    setInterval(() => {
      const word = this.skills[index];
      const length = word.length;

      if (up) {
        this.skill = word.slice(0, n);
        n++;
      }
      if (n === length + 1) { up = false; }
      if (!up) {
        this.skill = word.slice(0, n);
        n--;
      }
      if (n === 0) {
        up = true;
        index++;
      }
      if (index === this.skills.length) { index = 0; }

    }, 200);

  }

  ngOnDestroy(): void {
    window.clearInterval();
    this.subscriptions.unsubscribe();
  }

}
