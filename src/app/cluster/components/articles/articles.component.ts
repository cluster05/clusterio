import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostType } from 'src/app/constant/enum/post.enum';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'cluster-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {

  articles: Article[] = [];
  subscription: Subscription = new Subscription();

  constructor(private articleService: ArticlesService) { }


  ngOnInit(): void {

    this.subscription = this.articleService.readAllArticle(PostType.ARTICLE)
      .subscribe(
        response => {
          this.articles = response;
        },
        error => alert(error.error.message)
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
