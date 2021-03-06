import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/constant/interface/post.interface';

@Component({
  selector: 'cluster-build-article',
  templateUrl: './build-article.component.html',
  styleUrls: ['./build-article.component.scss']
})
export class BuildArticleComponent implements OnInit {

  buildType = 'article';

  ngOnInit(): void {
  }

  outputPost(article: Article): void {


  }
}
