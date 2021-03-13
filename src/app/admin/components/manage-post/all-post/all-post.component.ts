import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';

@Component({
  selector: 'cluster-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.scss']
})
export class AllPostComponent implements OnInit, OnDestroy {

  snippets: Article[] = [];
  articles: Article[] = [];
  subscription: Subscription = new Subscription();
  postType = 'article';

  constructor(private articleService: ArticlesService, private localStorageService: LocalstorageService) { }

  ngOnInit(): void {

    const serve = this.localStorageService.getItemFromLocalstorage('serve');
    if (serve) {
      this.postType = serve;
    }

    this.subscription = this.articleService.readAllArticle()
      .subscribe(
        response => {
          this.snippets = response.filter(f => f.type === 'snippet');
          this.articles = response.filter(f => f.type === 'article');
        },
        error => alert(error.error.message)
      );
  }

  getOtherPostType(): void {
    this.localStorageService.setItemToLocalstorage('serve', this.postType);
  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
