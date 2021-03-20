import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostType } from 'src/app/constant/enum/post.enum';
import { Article } from 'src/app/constant/interface/post.interface';

@Component({
  selector: 'cluster-view-article-clip',
  templateUrl: './view-article-clip.component.html',
  styleUrls: ['./view-article-clip.component.scss']
})
export class ViewArticleClipComponent implements OnInit {

  @Input() result: Article = {
    type: PostType.ARTICLE,
    title: '',
    description: '',
    tags: [],
    content: '',
  };

  @Output() clickOnCard = new EventEmitter<Article>();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateTo(article: Article): void {
    this.clickOnCard.emit(article)
  }

}
