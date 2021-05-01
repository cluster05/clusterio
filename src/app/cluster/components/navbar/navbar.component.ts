import { Component, OnInit } from '@angular/core';
import { faTag, faBlog, faSearch, faRssSquare, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGripfire } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'cluster-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userIcon = faUser;

  bottomBarLinks = [
    { link: 'courses', title: 'courses', icon: faGripfire },
    { link: 'articles', title: 'articles', icon: faBlog },
    { link: 'search', title: 'search', icon: faSearch },
    { link: 'snippets', title: 'snippets', icon: faRssSquare },
    { link: 'tags', title: 'tags', icon: faTag }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
