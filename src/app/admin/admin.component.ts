import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cluster-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  htmlString = '';
  viewPreview = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  editorChangeEmitter(event: string): void {
    if (event) {
      this.htmlString = event;
    }
  }

}
