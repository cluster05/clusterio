import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageTagsComponent } from './components/manage-tags/manage-tags.component';
import { ManageArticlesComponent } from './components/manage-articles/manage-articles.component';
import { BuilderTagComponent } from './components/manage-tags/builder-tag/builder-tag.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BuildPostComponent } from './shared/components/build-post/build-post.component';
import { BuildPostManageTagsComponent } from './shared/components/build-post/build-post-manage-tags/build-post-manage-tags.component';
import { AllArticlesComponent } from './components/manage-articles/all-articles/all-articles.component';
import { BuildArticleComponent } from './components/manage-articles/build-article/build-article.component';
import { QuillEditorComponent } from './shared/components/quill-editor/quill-editor.component';
import { QuillModule } from 'ngx-quill';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AdminComponent,
    AuthComponent,
    DashboardComponent,
    ManageTagsComponent,
    ManageArticlesComponent,
    BuilderTagComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    BuildPostComponent,
    BuildPostManageTagsComponent,
    AllArticlesComponent,
    BuildArticleComponent,
    QuillEditorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    QuillModule,
    HttpClientModule
  ]
})
export class AdminModule { }
