import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/constant/interface/post.interface';

@Component({
  selector: 'cluster-course-learn',
  templateUrl: './course-learn.component.html',
  styleUrls: ['./course-learn.component.scss']
})
export class CourseLearnComponent implements OnInit {

  @Input() articles: Article[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateTolesson(post: Article): void {
    const articleId = post.id as string;
    const regex = /\ /gi;
    const buildTitle = post.title.replace(regex, '-');
    this.router.navigate(['./lesson/', articleId], { relativeTo: this.route, queryParams: { title: buildTitle } });

  }
}
