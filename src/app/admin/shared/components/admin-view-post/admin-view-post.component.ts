import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'cluster-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.scss']
})
export class AdminViewPostComponent implements OnInit {


  post: Article = {
    type: 'article',
    title: 'article title is loading ...',
    description: '',
    tags: [],
    content: '',
  };
  subscription: Subscription = new Subscription();

  constructor(private articleService: ArticlesService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const postId = this.route.snapshot.paramMap.get('postId') as string

    this.subscription = this.articleService.readArticle(postId)
      .subscribe(
        response => {
          console.log(response);
        },
        error => alert(error.error.message)
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
