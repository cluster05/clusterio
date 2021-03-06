import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'cluster-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  username = 'user';

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    const decodedToken = this.tokenService.getDecodedToken();
    this.username = decodedToken.username;

  }

}
