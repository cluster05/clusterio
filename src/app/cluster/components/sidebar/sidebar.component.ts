import { Component, OnInit } from '@angular/core';
import { faTag, faBlog, faSearch, faRssSquare, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGripfire } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'cluster-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  links = [
    { link: 'search', title: 'search', icon: faSearch },
    { link: 'courses', title: 'courses', icon: faGripfire },
    { link: 'articles', title: 'articles', icon: faBlog },
    { link: 'snippets', title: 'snippets', icon: faRssSquare },
    { link: 'tags', title: 'tags', icon: faTag },
    { link: 'account', title: 'account', icon: faUser },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
