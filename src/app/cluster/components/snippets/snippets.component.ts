import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(private articleService: ArticlesService) { }


  ngOnInit(): void {

    this.subscription = this.articleService.readAllArticle()
      .subscribe(
        response => {
          this.snippets = response.filter(f => f.type === PostType.SNIPPET);
        },
        error => alert(error.error.message)
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
