import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'cluster-build-quick-snippet',
  templateUrl: './build-quick-snippet.component.html',
  styleUrls: ['./build-quick-snippet.component.scss']
})
export class BuildQuickSnippetComponent implements OnInit {

  buildType = 'snippet';

  ngOnInit(): void {
  }

  outputPost(snippet: any): void {
    console.log(snippet);

  }
}
