import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cluster-manage-tags',
  templateUrl: './manage-tags.component.html',
  styleUrls: ['./manage-tags.component.scss']
})
export class ManageTagsComponent implements OnInit {

  tags = [
    { name: 'angular', id: '1234567890' },
    { name: 'react', id: '1234567891' },
    { name: 'vue', id: '1234567892' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addTag(tagTextInputElement: HTMLInputElement): void {

    const tagText = tagTextInputElement.value;

    if (tagText.length > 1 && tagText.length <= 20) {
      // API CALL HERE
      tagTextInputElement.value = '';

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
