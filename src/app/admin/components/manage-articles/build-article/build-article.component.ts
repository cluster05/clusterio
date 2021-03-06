import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'cluster-build-article',
  templateUrl: './build-article.component.html',
  styleUrls: ['./build-article.component.scss']
})
export class BuildArticleComponent implements OnInit {

  buildType = 'article';

  constructor(
    private articleService: ArticlesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  outputPost(article: Article): void {
    this.articleService.createArticle(article).subscribe(
      response => this.router.navigate(['../',], { relativeTo: this.route }),
      error => alert(error.error.message)
    )

  }
}
