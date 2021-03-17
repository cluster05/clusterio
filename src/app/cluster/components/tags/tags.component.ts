import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tag } from 'src/app/constant/interface/tag.inteface';
import { TagsService } from 'src/app/shared/services/tags.service';

@Component({
  selector: 'cluster-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  subscriptions: Subscription = new Subscription();

  tags: Tag[] = [];

  constructor(private tagService: TagsService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.tagService.readAllTag().subscribe(tags => this.tags = tags));
  }

}
