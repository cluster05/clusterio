import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/constant/interface/post.interface';

@Component({
  selector: 'cluster-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})
export class SingleArticleComponent implements OnInit {

  @Input() article: Article = {
    type: '',
    description: '',
    title: '',
    tags: [],
    content: '',
  };

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  navigateTo(article: Article) {
    this.router.navigate(['./view/', article.id], { relativeTo: this.route });
  }

}
