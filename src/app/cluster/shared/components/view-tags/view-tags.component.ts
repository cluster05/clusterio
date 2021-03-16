import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/constant/interface/tag.inteface';

@Component({
  selector: 'cluster-view-tags',
  templateUrl: './view-tags.component.html',
  styleUrls: ['./view-tags.component.scss']
})
export class ViewTagsComponent implements OnInit {

  @Input() tags: Tag[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
