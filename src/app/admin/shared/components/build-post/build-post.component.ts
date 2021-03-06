import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/constant/interface/post.interface';
import { Tag } from 'src/app/constant/interface/tag.inteface';

@Component({
  selector: 'cluster-build-post',
  templateUrl: './build-post.component.html',
  styleUrls: ['./build-post.component.scss']
})
export class BuildPostComponent implements OnInit {

  @Input() buildType = 'article';
  @Output() outputPost = new EventEmitter<any>();

  htmlString = '';
  viewPreview = false;

  snippetTags: Tag[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  addTag(tag: Tag): void {
    const isTagAlreadyPresent = this.snippetTags.find((t => t.id === tag?.id));
    if (isTagAlreadyPresent) {
      alert('Given tag already present');
    } else {
      this.snippetTags.push(tag);
    }
  }

  removeTag(tagId: string): void {
    this.snippetTags = this.snippetTags.filter(t => t.id !== tagId);
  }


  editorChangeEmitter(event: string): void {
    if (event) {
      this.htmlString = event;
    }
  }

  postPost(postTitle: string): void {
    const buildPost: Article = {
      type: this.buildType,
      title: postTitle,
      content: this.htmlString,
      tags: this.snippetTags,
    };
    this.outputPost.emit(buildPost);
  }

}
