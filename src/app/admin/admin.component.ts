import { Component, OnDestroy, OnInit } from '@angular/core';
import { TokenService } from '../shared/services/token.service';

@Component({
  selector: 'cluster-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
