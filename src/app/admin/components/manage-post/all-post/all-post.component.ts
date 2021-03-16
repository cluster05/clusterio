import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostType } from 'src/app/constant/enum/post.enum';
import { Article } from 'src/app/constant/interface/post.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';

@Component({
  selector: 'cluster-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.scss']
})
export class AllPostComponent implements OnInit, OnDestroy {

  posts: Article[] = [];
  subscription: Subscription = new Subscription();
  postType = PostType.ARTICLE;
  PostType = PostType;

  constructor(private articleService: ArticlesService, private localStorageService: LocalstorageService) { }

  ngOnInit(): void {

    const serve: PostType = this.localStorageService.getItemFromLocalstorage('serve') as PostType;
    if (serve) {
      this.postType = serve;
    }

    this.getOtherPostType();
  }

  getPostByType(): void {
    this.subscription = this.articleService.readAllArticle(this.postType)
      .subscribe(
        response => {
          this.posts = response;
        },
        error => alert(error.error.message)
      );
  }

  getOtherPostType(): void {
    this.localStorageService.setItemToLocalstorage('serve', this.postType);
    this.getPostByType();
  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
