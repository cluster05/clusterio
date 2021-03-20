import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Analytics } from 'src/app/constant/interface/analytics.interface';
import { AnalyticsService } from 'src/app/shared/services/analytics.service';

@Component({
  selector: 'cluster-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  analytics: Analytics = {
    articles: 0,
    courses: 0,
    snippets: 0,
    tags: 0,
    users: 0
  };
  subscription: Subscription = new Subscription();

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit(): void {
    this.subscription = this.analyticsService.getAnalyticsCount()
      .subscribe(
        response => this.analytics = response,
        error => alert(error.error.message)
      );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
