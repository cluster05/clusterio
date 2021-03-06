import { Component, OnInit } from '@angular/core';
import { faTag, faBlog, faArchive, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faDashcube } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
@Component({
  selector: 'cluster-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

  links = [
    { link: 'dashboard', title: 'dashboard', icon: faDashcube },
    { link: 'articles', title: 'articles', icon: faBlog },
    { link: 'quick-snippet', title: 'quick snippet', icon: faArchive },
    { link: 'tags', title: 'tags', icon: faTag },
  ];
  faSignOutAlt = faSignOutAlt;

  constructor(
    private router: Router,
    private localStorageservice: LocalstorageService) { }

  ngOnInit(): void {
  }

  logout() {
    this.localStorageservice.removeItemFromLocalStorage('access_token');
    this.router.navigate(['cryptic/auth'],);
  }

}
