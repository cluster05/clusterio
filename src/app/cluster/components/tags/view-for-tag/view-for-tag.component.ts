import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'cluster-view-for-tag',
  templateUrl: './view-for-tag.component.html',
  styleUrls: ['./view-for-tag.component.scss']
})
export class ViewForTagComponent implements OnInit {

  searchTag = '';
  results: Article[] = [];

  constructor(private route: ActivatedRoute, private articlesService: ArticlesService) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.searchTag = params.tagName;

      this.articlesService.searchArticlesByTagName(this.searchTag)
        .subscribe(
          response => this.results = response,
          error => alert(error.error.message));
    });


  }

}
