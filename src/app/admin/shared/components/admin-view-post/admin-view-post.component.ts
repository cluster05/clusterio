import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'cluster-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.scss']
})
export class AdminViewPostComponent implements OnInit {


  post: Article = {
    type: 'article',
    title: '',
    description: '',
    tags: [],
    content: '',
  };

  isContentRetriving = true;
  subscription: Subscription = new Subscription();

  constructor(private articleService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    const postId = this.route.snapshot.paramMap.get('postId') as string

    this.subscription = this.articleService.readArticle(postId)
      .subscribe(
        response => {
          // console.log(response);
          this.isContentRetriving = false;
          this.post = response;
        },
        error => alert(error.error.message)
      );
  }

  deletePost(postId: string) {
    this.articleService.deleteArticle(postId).subscribe(
      res => this.router.navigate(['/cryptic/posts']),
      error => alert(error.error.message)
    );

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
