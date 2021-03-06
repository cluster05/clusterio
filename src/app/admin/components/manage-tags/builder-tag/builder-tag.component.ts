import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons'
import { Tag } from 'src/app/constant/interface/tag.inteface';

@Component({
  selector: 'cluster-builder-tag',
  templateUrl: './builder-tag.component.html',
  styleUrls: ['./builder-tag.component.scss']
})
export class BuilderTagComponent implements OnInit {

  @Input() tag: Tag = { id: '', name: '' };
  @Output() editTag = new EventEmitter<string>();
  @Output() deleteTag = new EventEmitter<string>();

  deleteIcon = faTimes;
  editIcon = faPen;

  constructor() { }

  ngOnInit(): void {
  }

  edit(tagId: string): void {
    this.editTag.emit(tagId);
  }
  delete(tagId: string): void {
    this.deleteTag.emit(tagId);
  }

}
