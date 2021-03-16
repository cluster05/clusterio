import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'cluster-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  searches: Article[] = [];
  searchTextChanged = new Subject<string>();
  subscription: Subscription = new Subscription();
  searchState = {
    isSearching: false,
    resultFound: 0
  };

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {

    this.subscription = this.searchTextChanged
      .pipe(
        debounceTime(800),
        distinctUntilChanged(),
        mergeMap((search: string) => this.articlesService.searchArticlesByKeyWord(search))
      )
      .subscribe(
        response => {
          this.searches = response;
          this.searchState = {
            isSearching: false,
            resultFound: this.searches.length
          }
        },
        error => alert(error.error.message)
      );

  }

  searchPostByWord(searchWord: string): void {
    if (searchWord.trim().length > 1) {
      this.searchState = {
        isSearching: true,
        resultFound: 0
      }
      this.searchTextChanged.next(searchWord);
    }
    if (searchWord.length === 0) {
      this.searches = [];
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

