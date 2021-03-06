import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cluster-build-quick-snippet',
  templateUrl: './build-quick-snippet.component.html',
  styleUrls: ['./build-quick-snippet.component.scss']
})
export class BuildQuickSnippetComponent implements OnInit {

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
