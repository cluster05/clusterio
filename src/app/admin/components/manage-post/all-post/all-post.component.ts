import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'cluster-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.scss']
})
export class AllPostComponent implements OnInit, OnDestroy {

  snippets: Article[] = [];
  articles: Article[] = [];
  subscription: Subscription = new Subscription();

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {

    this.subscription = this.articleService.readAllArticle()
      .subscribe(
        response => {
          this.snippets = response.filter(f => f.type === 'snippet');
          this.articles = response.filter(f => f.type === 'article');
        },
        error => alert(error.error.message)
      );
  }

  getOtherPostType(postType: string): void {
    console.log(postType);

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
