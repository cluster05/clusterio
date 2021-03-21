import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'cluster-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any;

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private localStorageservice: LocalstorageService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    if (!this.tokenService.isAuthaticated()) {
      this.router.navigate(['/auth']);
    }
    this.user = this.tokenService.getDecodedToken();

    if (this.user) {
      this.updateMetatag();
    }

  }

  updateMetatag(): void {
    this.title.setTitle('Clusterdev.io | ' + this.user.username);
    this.meta.updateTag({ name: 'og:url', content: 'www.clusterdev.io/' + this.user.username });
    this.meta.updateTag({ name: 'description', content: 'user : ' + this.user.username });
  }



  logout(): void {
    this.localStorageservice.removeItemFromLocalStorage('access_token');
    this.router.navigate(['/']);
  }

}
