import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'cluster-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('Clusterdev | Admin ');
    meta.addTags([
      { name: 'keywords', content: 'clusterdev admin , login clusterdev amdin page' },
      { name: 'description', content: 'clusterdev admin page.' },
      { name: 'robots', content: 'clusterdev admin , maange clusterdev admin page' }
    ]);
  }

  ngOnInit(): void {
  }
}
