import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'cluster-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searches: Article[] = [];
  searchTextChanged = new Subject<string>();
  subscription: Subscription = new Subscription();

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {

    this.subscription = this.searchTextChanged
      .pipe(
        debounceTime(800),
        distinctUntilChanged(),
        mergeMap((search: string) => this.articlesService.searchArticlesByKeyWord(search))
      )
      .subscribe(
        response => this.searches = response,
        error => alert(error.error.message)
      );

  }

  searchPostByWord(searchWord: string): void {
    if (searchWord.trim().length > 1) {
      this.searchTextChanged.next(searchWord);
    }
  }

}

