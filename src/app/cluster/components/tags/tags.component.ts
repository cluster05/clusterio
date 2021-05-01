import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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

  constructor(
    private tagService: TagsService,
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('Clusterdev | Tags');
  }

  ngOnInit(): void {
    this.subscriptions.add(this.tagService.readAllTag().subscribe(tags => {
      this.tags = tags;
      this.meta.addTags([
        { name: 'keywords', content: `tags , clusterdev tags , search tags , search tag of  ${this.tags.join(' ')}` },
        { name: 'description', content: 'search courses, articles , snippets by tag name avaliable on clusterdev' },
        { name: 'robots', content: 'tags , clusterdev tags ' }
      ]);
    }));
  }

}
