import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cluster-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags = ['angular', 'firebase', 'github', 'react', 'vuew', 'html', 'css', 'javascript'];

  constructor() { }

  ngOnInit(): void {
  }

}
