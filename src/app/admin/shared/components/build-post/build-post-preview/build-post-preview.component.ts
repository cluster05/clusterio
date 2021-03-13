import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/constant/interface/post.interface';

@Component({
  selector: 'cluster-build-post-preview',
  templateUrl: './build-post-preview.component.html',
  styleUrls: ['./build-post-preview.component.scss']
})
export class BuildPostPreviewComponent implements OnInit {

  @Input() postBuilder: Article = {
    type: '',
    title: '',
    content: '',
    description: '',
    tags: []
  };
  @Output() viewPreviewEmmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleViewPreview(): void {
    this.viewPreviewEmmitter.emit();
  }

}
