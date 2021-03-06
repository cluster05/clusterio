import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cluster-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {


  username = 'ajay';

  constructor() { }

  ngOnInit(): void {
  }

}
