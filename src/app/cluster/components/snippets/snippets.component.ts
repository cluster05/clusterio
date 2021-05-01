import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { PostType } from 'src/app/constant/enum/post.enum';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'cluster-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.scss']
})
export class SnippetsComponent implements OnInit, OnDestroy {

  snippets: Article[] = [];
  subscription: Subscription = new Subscription();

  constructor(
    private articleService: ArticlesService,
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('Clusterdev | Snippets');
    meta.addTags([
      { name: 'keywords', content: 'clusterdev snippets , articles , programming articles , clusterdev posts ' },
      { name: 'description', content: 'search free courses, articles , snippets avaliable on clusterdev' },
      { name: 'robots', content: 'posts , clusterdev snippets  , programming blog posts' }
    ]);
  }


  ngOnInit(): void {

    this.subscription = this.articleService.readAllArticle(PostType.SNIPPET)
      .subscribe(
        response => {
          this.snippets = response;
        },
        error => alert(error.error.message)
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
