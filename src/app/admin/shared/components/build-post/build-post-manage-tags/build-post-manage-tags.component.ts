import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cluster-build-post-manage-tags',
  templateUrl: './build-post-manage-tags.component.html',
  styleUrls: ['./build-post-manage-tags.component.scss']
})
export class BuildPostManageTagsComponent implements OnInit {

  @Input() buildType = 'article';
  @Input() snippetTags: any[] = [];
  @Input() tags: any[] = [];
  @Output() addTagEmitter = new EventEmitter<string>();
  @Output() removeTagEmitter = new EventEmitter<string>();

  deleteTagIcon = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  addTag(tagId: string): void {
    this.addTagEmitter.emit(tagId);
  }

  removeTag(tagId: string): void {
    this.removeTagEmitter.emit(tagId);
  }

}
