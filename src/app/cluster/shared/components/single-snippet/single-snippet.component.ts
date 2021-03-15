import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostType } from 'src/app/constant/enum/post.enum';
import { Article } from 'src/app/constant/interface/post.interface';

@Component({
  selector: 'cluster-single-snippet',
  templateUrl: './single-snippet.component.html',
  styleUrls: ['./single-snippet.component.scss']
})
export class SingleSnippetComponent implements OnInit {

  PostType = PostType;

  @Input() snippet: Article = {
    type: PostType.ARTICLE,
    description: '',
    title: '',
    tags: [],
    content: '',
  };

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateTo(snippet: Article): void {
    this.router.navigate(['./snippets/', snippet.id], { relativeTo: this.route });
  }

}
