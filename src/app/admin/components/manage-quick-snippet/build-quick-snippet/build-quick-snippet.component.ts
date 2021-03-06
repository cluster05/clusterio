import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cluster-build-quick-snippet',
  templateUrl: './build-quick-snippet.component.html',
  styleUrls: ['./build-quick-snippet.component.scss']
})
export class BuildQuickSnippetComponent implements OnInit {

  htmlString = '';
  viewPreview = false;

  tags = [
    { name: 'angular', id: '1234567890' },
    { name: 'react', id: '1234567891' },
    { name: 'vue', id: '1234567892' },
  ];

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
