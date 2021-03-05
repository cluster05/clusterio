import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageTagsComponent } from './components/manage-tags/manage-tags.component';
import { ManageQuickSnippetComponent } from './components/manage-quick-snippet/manage-quick-snippet.component';
import { ManageArticlesComponent } from './components/manage-articles/manage-articles.component';
import { BuilderTagComponent } from './components/manage-tags/builder-tag/builder-tag.component';
import { BuilderArticlesComponent } from './components/manage-articles/builder-articles/builder-articles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';


@NgModule({
  declarations: [
    AdminComponent,
    AuthComponent,
    DashboardComponent,
    ManageTagsComponent,
    ManageQuickSnippetComponent,
    ManageArticlesComponent,
    BuilderTagComponent,
    BuilderArticlesComponent,
    AdminNavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
