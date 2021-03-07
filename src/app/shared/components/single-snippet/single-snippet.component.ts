import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/constant/interface/post.interface';

@Component({
  selector: 'cluster-single-snippet',
  templateUrl: './single-snippet.component.html',
  styleUrls: ['./single-snippet.component.scss']
})
export class SingleSnippetComponent implements OnInit {

  @Input() snippet: Article;

  constructor() {
    this.snippet = {
      content: '',
      tags: [],
      title: '',
      type: ''
    };
  }

  ngOnInit(): void {
  }

}
