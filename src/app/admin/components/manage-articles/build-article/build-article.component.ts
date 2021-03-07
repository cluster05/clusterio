import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'cluster-build-article',
  templateUrl: './build-article.component.html',
  styleUrls: ['./build-article.component.scss']
})
export class BuildArticleComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription()

  constructor(
    private articleService: ArticlesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  outputPost(article: Article): void {
    this.subscription = this.articleService.createArticle(article).subscribe(
      response => this.router.navigate(['../'], { relativeTo: this.route }),
      error => alert(error.error.message)
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
