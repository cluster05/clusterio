import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';
@Component({
  selector: 'cluster-build-quick-snippet',
  templateUrl: './build-quick-snippet.component.html',
  styleUrls: ['./build-quick-snippet.component.scss']
})
export class BuildQuickSnippetComponent implements OnInit {

  buildType = 'snippet';
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
      response => this.router.navigate(['../',], { relativeTo: this.route }),
      error => alert(error.error.message)
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
