import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageTagsComponent } from './components/manage-tags/manage-tags.component';
import { BuilderTagComponent } from './components/manage-tags/builder-tag/builder-tag.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BuildPostComponent } from './shared/components/build-post/build-post.component';
import { BuildPostManageTagsComponent } from './shared/components/build-post/build-post-manage-tags/build-post-manage-tags.component';
import { QuillEditorComponent } from './shared/components/quill-editor/quill-editor.component';
import { QuillModule } from 'ngx-quill';
import { HttpClientModule } from '@angular/common/http';
import { SingleArticleComponent } from './shared/components/single-article/single-article.component';
import { SingleSnippetComponent } from './shared/components/single-snippet/single-snippet.component';
import { AdminViewPostComponent } from './shared/components/admin-view-post/admin-view-post.component';
import { ManagePostsComponent } from './components/manage-post/manage-post.component';
import { AllPostComponent } from './components/manage-post/all-post/all-post.component';


@NgModule({
  declarations: [
    AdminComponent,
    AuthComponent,
    DashboardComponent,
    ManageTagsComponent,
    ManagePostsComponent,
    BuilderTagComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    BuildPostComponent,
    BuildPostManageTagsComponent,
    AllPostComponent,
    BuildPostComponent,
    QuillEditorComponent,
    SingleArticleComponent,
    SingleSnippetComponent,
    AdminViewPostComponent
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
