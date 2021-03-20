import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tag } from 'src/app/constant/interface/tag.inteface';

@Component({
  selector: 'cluster-view-tags',
  templateUrl: './view-tags.component.html',
  styleUrls: ['./view-tags.component.scss']
})
export class ViewTagsComponent implements OnInit {

  @Input() tags: Tag[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchTag(tagName: string, event: Event): void {
    event.stopPropagation();
    this.router.navigate(['/tags/' + tagName]);
  }

}
