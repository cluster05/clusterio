import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  tags = [
    { name: 'angular', id: '1234567890' },
    { name: 'react', id: '1234567891' },
    { name: 'vue', id: '1234567892' },
  ];

  snippetTags: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  addTag(tagId: string): void {
    const tag = this.tags.find(t => t.id === tagId);
    const isTagAlreadyPresent = this.snippetTags.find((t: any) => t.id === tag?.id);
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
    const buildPost = {
      type: this.buildType,
      title: postTitle,
      tags: this.snippetTags,
      desc: this.htmlString
    };
    this.outputPost.emit(buildPost);
  }

}
