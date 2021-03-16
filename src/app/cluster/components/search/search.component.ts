import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'cluster-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searches: Article[] = [];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
  }

  searchPostByWord(searchWord: string): void {
    if (searchWord.trim().length > 1) {
      this.articlesService.searchArticlesByKeyWord(searchWord)
        .subscribe(
          respone => this.searches = respone,
          error => console.log(error.error.message)
        );
    }
  }

}
