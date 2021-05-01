import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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

  constructor(
    private articleService: ArticlesService,
    private title: Title,
    private meta: Meta) {
  }


  ngOnInit(): void {

    this.title.setTitle('Clusterdev | Articles ');
    this.meta.updateTag(
      { name: 'keywords', content: 'clusterdev snippets , articles , programming articles , clusterdev posts ' },
    );
    this.meta.updateTag(

      { name: 'description', content: 'search free courses, articles , snippets avaliable on clusterdev' },
    )
    this.meta.updateTag(
      { name: 'robots', content: 'posts , clusterdev articles  , programming blog posts' }

    )

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
