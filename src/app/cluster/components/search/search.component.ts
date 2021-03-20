import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';

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

  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) { }

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

  navigateTo(article: Article): void {
    const regex = /\ /gi;
    const buildTitle = article.title.replace(regex, '-');
    const postType = article.type;
    this.router.navigate(['/' + postType + 's/', article.id], { queryParams: { title: buildTitle } });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

