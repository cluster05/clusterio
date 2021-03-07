import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'cluster-all-quick-snippet',
  templateUrl: './all-quick-snippet.component.html',
  styleUrls: ['./all-quick-snippet.component.scss']
})
export class AllQuickSnippetComponent implements OnInit {

  quicksnippet: Article[] = [];

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.articleService.readAllArticle().subscribe(
      quicksnippet => this.quicksnippet = quicksnippet,
      error => alert(error.error.message));
  }

}
