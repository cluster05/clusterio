import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/constant/interface/post.interface';
import { Tag } from 'src/app/constant/interface/tag.inteface';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'cluster-build-post',
  templateUrl: './build-post.component.html',
  styleUrls: ['./build-post.component.scss']
})
export class BuildPostComponent implements OnInit, OnDestroy {

  @Output() outputPost = new EventEmitter<any>();
  subscription: Subscription = new Subscription();

  postImageURL = '';

  postUpdatingMode = false;
  postBuilder: Article = {
    content: '',
    description: '',
    tags: [],
    title: '',
    type: 'article',
  };

  viewPreview = false;

  constructor(private articleService: ArticlesService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('postId') as string;

    if (postId) {
      this.subscription = this.articleService.readArticle(postId)
        .subscribe(
          response => {
            this.postBuilder = response;
            this.postUpdatingMode = true;
            this.postImageURL = this.postBuilder.postImageUrl as string;
          },
          error => alert(error.error.message)
        );
    }
  }

  addTag(tag: Tag): void {
    const isTagAlreadyPresent = this.postBuilder.tags.find((t => t.id === tag?.id));
    if (isTagAlreadyPresent) {
      alert('Given tag already present');
    } else {
      this.postBuilder.tags.push(tag);
    }
  }

  removeTag(tagId: string): void {
    this.postBuilder.tags = this.postBuilder.tags.filter(t => t.id !== tagId);
  }


  editorChangeEmitter(event: string): void {
    if (event) {
      this.postBuilder.content = event;
    }
  }

  setPostImageURL(imageURL: string): void {
    this.postImageURL = imageURL;
  }

  postPost(): void {
    const buildPost: Article = {
      type: this.postBuilder.type,
      title: this.postBuilder.title,
      description: this.postBuilder.description,
      content: this.postBuilder.content,
      tags: this.postBuilder.tags,
      postImageUrl: this.postImageURL
    };
    this.outputPost.emit(buildPost);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
