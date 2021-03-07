import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'cluster-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.scss']
})
export class AllArticlesComponent implements OnInit, OnDestroy {

  snippets: Article[] = [];
  subscription: Subscription = new Subscription();

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {

    this.subscription = this.articleService.readAllArticle()
      .subscribe(
        response => { this.snippets = response; },
        error => alert(error.error.message)
      );
  }

  getOtherPostType(postType: string) {
    console.log(postType);

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
