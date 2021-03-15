import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/constant/interface/post.interface';

@Component({
  selector: 'cluster-view-for-tag',
  templateUrl: './view-for-tag.component.html',
  styleUrls: ['./view-for-tag.component.scss']
})
export class ViewForTagComponent implements OnInit {

  searchTag = '';
  results: Article[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchTag = this.route.snapshot.paramMap.get('tagName') as string;

    if (this.searchTag) {
      //API call for search tag
    }
  }

}
