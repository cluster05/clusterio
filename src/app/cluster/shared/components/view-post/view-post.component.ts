import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostType } from 'src/app/constant/enum/post.enum';
import { Article } from 'src/app/constant/interface/post.interface';
import { redirectToPageNotFound } from 'src/app/constant/redirect/page-not-found';
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
    private router: Router,
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit(): void {

    const postId = this.route.snapshot.paramMap.get('postId') as string;
    const courseId = this.route.snapshot.paramMap.get('courseId') as string;

    if (courseId) {

      this.subscription = this.courseService.readCourseArticle(courseId, postId)
        .subscribe(
          response => {
            this.isContentRetriving = false;
            this.post = response;
            this.buildMeta();
          },
          error => redirectToPageNotFound(this.router, this.router.url, error.error.message)
        );


    } else {
      this.subscription = this.articleService.readArticle(postId)
        .subscribe(
          response => {
            this.isContentRetriving = false;
            this.post = response;
            this.buildMeta();
          },
          error => redirectToPageNotFound(this.router, this.router.url, error.error.message)
        );
    }
  }

  buildMeta(): void {
    this.title.setTitle(`Clusterdev | ${this.post.type} : ${this.post.title}`);
    this.meta.addTags([
      { name: 'keywords', content: ` ${this.post.tags.join(' ')}  , ${this.post.title}` },
      { name: 'description', content: ` this ${this.post.type} is about the ${this.post.title} and gives information about ${this.post.description}` },
      { name: 'robots', content: `${this.post.tags.join(' ')} , ${this.post.title} , ${this.post.description}` }
    ]);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
