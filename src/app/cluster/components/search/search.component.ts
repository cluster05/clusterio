import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/constant/interface/post.interface';

@Component({
  selector: 'cluster-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searches: Article[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
