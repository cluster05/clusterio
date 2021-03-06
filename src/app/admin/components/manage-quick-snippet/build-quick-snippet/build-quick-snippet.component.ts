import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/constant/interface/post.interface';
@Component({
  selector: 'cluster-build-quick-snippet',
  templateUrl: './build-quick-snippet.component.html',
  styleUrls: ['./build-quick-snippet.component.scss']
})
export class BuildQuickSnippetComponent implements OnInit {

  buildType = 'snippet';

  ngOnInit(): void {
  }

  outputPost(snippet: Article): void {


  }
}
