import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tag } from 'src/app/constant/interface/tag.inteface';
import { TagsService } from 'src/app/shared/services/tags.service';

@Component({
  selector: 'cluster-manage-tags',
  templateUrl: './manage-tags.component.html',
  styleUrls: ['./manage-tags.component.scss']
})
export class ManageTagsComponent implements OnInit {


  subscriptions: Subscription = new Subscription();

  tags: Tag[] = [];

  tagMode = {
    edit: false,
    add: true
  };
  editTagInput: Tag = { id: '', name: '' };

  constructor(private tagService: TagsService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.tagService.readAllTag().subscribe(tags => this.tags = tags));
  }

  addTag(tagTextInputElement: HTMLInputElement): void {

    const tagText = tagTextInputElement.value;

    if (tagText.length > 1 && tagText.length <= 20) {

      if (this.tagMode.add) {
        this.subscriptions.add(
          this.tagService.createTag(tagText).subscribe(
            tag => {
              this.tags.push(tag);
            },
            error => {
              alert(error.error.message)
            })
        );
      } else {
        this.subscriptions.add(
          this.tagService.updateTag(this.editTagInput.id, tagText).subscribe(
            response => {
              const index = this.tags.findIndex(t => t.id === this.editTagInput.id);
              this.tags.splice(index, 1, response);
              this.cancelUpdate();
            },
            error => alert(error.error.message))
        );
      }
      tagTextInputElement.value = '';
    } else {
      alert('Not valid tag name');
    }
  }

  editTag(tag: Tag): void {
    this.editTagInput = tag;
    this.tagMode = {
      add: false,
      edit: true
    }
  }

  cancelUpdate() {
    this.editTagInput = { id: '', name: '' };
    this.tagMode = {
      edit: false,
      add: true
    };
  }

  deleteTag(tagId: string): void {
    this.subscriptions.add(
      this.tagService.deleteTag(tagId).subscribe(
        response => {
          this.tags = this.tags.filter(t => t.id !== tagId);
        },
        error => alert(error.error.message)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
