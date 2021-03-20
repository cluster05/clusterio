import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cluster-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  buildError = '';
  gobackto = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const error = this.route.snapshot.queryParamMap.get('error') as string;
    this.gobackto = this.route.snapshot.queryParamMap.get('gobackto') as string;
    const regex = /\-/gi;
    this.buildError = error.replace(regex, ' ');
  }

  redirectToHome() {
    this.router.navigate([this.gobackto]);
  }

}
