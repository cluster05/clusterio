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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BuildQuickSnippetComponent } from './components/manage-quick-snippet/build-quick-snippet/build-quick-snippet.component';
import { AllQuickSnippetComponent } from './components/manage-quick-snippet/all-quick-snippet/all-quick-snippet.component';
import { SingleQuickSnippetComponent } from './components/manage-quick-snippet/all-quick-snippet/single-quick-snippet/single-quick-snippet.component';
import { BuildPostComponent } from './shared/components/build-post/build-post.component';
import { BuildPostManageTagsComponent } from './shared/components/build-post/build-post-manage-tags/build-post-manage-tags.component';
import { AllArticlesComponent } from './components/manage-articles/all-articles/all-articles.component';
import { SingleArticleComponent } from './components/manage-articles/all-articles/single-article/single-article.component';
import { BuildArticleComponent } from './components/manage-articles/build-article/build-article.component';
import { QuillEditorComponent } from './shared/components/quill-editor/quill-editor.component';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    AdminComponent,
    AuthComponent,
    DashboardComponent,
    ManageTagsComponent,
    ManageQuickSnippetComponent,
    ManageArticlesComponent,
    BuilderTagComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    BuildQuickSnippetComponent,
    AllQuickSnippetComponent,
    SingleQuickSnippetComponent,
    BuildPostComponent,
    BuildPostManageTagsComponent,
    AllArticlesComponent,
    SingleArticleComponent,
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
    QuillModule
  ]
})
export class AdminModule { }
