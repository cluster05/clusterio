import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/constant/interface/tag.inteface';
import { TagsService } from 'src/app/shared/services/tags.service';

@Component({
  selector: 'cluster-manage-tags',
  templateUrl: './manage-tags.component.html',
  styleUrls: ['./manage-tags.component.scss']
})
export class ManageTagsComponent implements OnInit {

  tags: Tag[] = [];

  constructor(private tagService: TagsService) { }

  ngOnInit(): void {
    this.tagService.readAllTag().subscribe(tags => this.tags = tags);
  }

  addTag(tagTextInputElement: HTMLInputElement): void {

    const tagText = tagTextInputElement.value;

    if (tagText.length > 1 && tagText.length <= 20) {
      this.tagService.createTag(tagText).subscribe(
        tag => {
          this.tags.push(tag);
          tagTextInputElement.value = '';
        },
        error => {
          alert(error.error.message)
        });


    } else {
      alert('Not valid tag name');
    }
  }

  editTag(tagId: string): void {
    // API CALL HERE
  }

  deleteTag(tagId: string): void {
    // API CALL HERE
  }

}
