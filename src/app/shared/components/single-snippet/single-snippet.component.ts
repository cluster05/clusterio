import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/constant/interface/post.interface';

@Component({
  selector: 'cluster-single-snippet',
  templateUrl: './single-snippet.component.html',
  styleUrls: ['./single-snippet.component.scss']
})
export class SingleSnippetComponent implements OnInit {

  @Input() snippet: Article = {
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

  navigateTo(snippet: Article) {
    this.router.navigate(['./view/', snippet.id], { relativeTo: this.route });
  }

}
