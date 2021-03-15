import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClusterRoutingModule } from './cluster-routing.module';
import { ClusterComponent } from './cluster.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthComponent } from './components/auth/auth.component';
import { UserComponent } from './components/user/user.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { ViewPostComponent } from './shared/components/view-post/view-post.component';
import { SingleArticleComponent } from './shared/components/single-article/single-article.component';
import { SingleSnippetComponent } from './shared/components/single-snippet/single-snippet.component';
import { CommentsComponent } from './shared/components/comments/comments.component';
import { TagsComponent } from './components/tags/tags.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ClusterComponent,
    NavbarComponent,
    SidebarComponent,
    AuthComponent,
    UserComponent,
    ArticlesComponent,
    SnippetsComponent,
    SearchComponent,
    HomeComponent,
    ViewPostComponent,
    SingleArticleComponent,
    SingleSnippetComponent,
    CommentsComponent,
    TagsComponent
  ],
  imports: [
    CommonModule,
    ClusterRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ]
})
export class ClusterModule { }
