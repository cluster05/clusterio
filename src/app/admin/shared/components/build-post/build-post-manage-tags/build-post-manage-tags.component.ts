import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Tag } from 'src/app/constant/interface/tag.inteface';
import { TagsService } from 'src/app/shared/services/tags.service';

@Component({
  selector: 'cluster-build-post-manage-tags',
  templateUrl: './build-post-manage-tags.component.html',
  styleUrls: ['./build-post-manage-tags.component.scss']
})
export class BuildPostManageTagsComponent implements OnInit, OnDestroy {

  @Input() buildType = 'article';
  @Input() snippetTags: any[] = [];
  @Output() addTagEmitter = new EventEmitter<Tag>();
  @Output() removeTagEmitter = new EventEmitter<string>();

  subscription: Subscription = new Subscription();

  tags: Tag[] = [];
  deleteTagIcon = faTimes;

  constructor(private tagsService: TagsService) { }

  ngOnInit(): void {

    this.subscription.add(this.tagsService.readAllTag().subscribe(tags => this.tags = tags));

  }

  addTag(tagId: string): void {

    const tag = this.tags.find(t => t.id === tagId);
    this.addTagEmitter.emit(tag);
  }

  removeTag(tagId: string): void {
    this.removeTagEmitter.emit(tagId);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
