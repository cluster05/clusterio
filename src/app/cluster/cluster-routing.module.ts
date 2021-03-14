import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClusterComponent } from './cluster.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { TagsComponent } from './components/tags/tags.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: '',
    component: ClusterComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'search', component: SearchComponent },
      { path: 'articles', component: ArticlesComponent },
      { path: 'snippets', component: SnippetsComponent },
      { path: 'tags', component: TagsComponent },
      { path: 'account', component: UserComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClusterRoutingModule { }
