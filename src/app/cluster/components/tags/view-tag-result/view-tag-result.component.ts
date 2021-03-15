import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostType } from 'src/app/constant/enum/post.enum';
import { Article } from 'src/app/constant/interface/post.interface';

@Component({
  selector: 'cluster-view-tag-result',
  templateUrl: './view-tag-result.component.html',
  styleUrls: ['./view-tag-result.component.scss']
})
export class ViewTagResultComponent implements OnInit {

  @Input() result: Article = {
    type: PostType.ARTICLE,
    title: '',
    description: '',
    tags: [],
    content: '',
  };

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateTo(article: Article): void {
    const regex = /\ /gi;
    const buildTitle = article.title.replace(regex, '-');
    const postType = article.type;
    this.router.navigate(['/' + postType + 's/', article.id], { queryParams: { title: buildTitle } });
  }

}
