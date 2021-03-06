import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cluster-build-article',
  templateUrl: './build-article.component.html',
  styleUrls: ['./build-article.component.scss']
})
export class BuildArticleComponent implements OnInit {

  buildType = 'article';

  ngOnInit(): void {
  }

  outputPost(article: any): void {
    console.log(article);

  }
}
