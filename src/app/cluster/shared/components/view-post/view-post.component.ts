import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostType } from 'src/app/constant/enum/post.enum';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'cluster-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit, OnDestroy {
  PostType = PostType;


  post: Article = {
    type: PostType.ARTICLE,
    title: '',
    description: '',
    tags: [],
    content: '',
  };

  isContentRetriving = true;
  subscription: Subscription = new Subscription();

  constructor(
    private articleService: ArticlesService,
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    const postId = this.route.snapshot.paramMap.get('postId') as string;
    const courseId = this.route.snapshot.paramMap.get('courseId') as string;

    if (courseId) {

      this.subscription = this.courseService.readCourseArticle(courseId, postId)
        .subscribe(
          response => {
            this.isContentRetriving = false;
            this.post = response;
          },
          error => alert(error.error.message)
        );


    } else {
      this.subscription = this.articleService.readArticle(postId)
        .subscribe(
          response => {
            this.isContentRetriving = false;
            this.post = response;
          },
          error => alert(error.error.message)
        );
    }


  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
