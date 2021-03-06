import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllArticlesComponent } from './components/manage-articles/all-articles/all-articles.component';
import { BuildArticleComponent } from './components/manage-articles/build-article/build-article.component';
import { ManageArticlesComponent } from './components/manage-articles/manage-articles.component';
import { AllQuickSnippetComponent } from './components/manage-quick-snippet/all-quick-snippet/all-quick-snippet.component';
import { BuildQuickSnippetComponent } from './components/manage-quick-snippet/build-quick-snippet/build-quick-snippet.component';
import { ManageQuickSnippetComponent } from './components/manage-quick-snippet/manage-quick-snippet.component';
import { ManageTagsComponent } from './components/manage-tags/manage-tags.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'auth', component: AuthComponent },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'articles',
        component: ManageArticlesComponent,
        children: [
          { path: 'create', component: BuildArticleComponent },
          { path: 'update/:snippetId', component: BuildArticleComponent },
          { path: '', component: AllArticlesComponent },
        ]
      },
      {
        path: 'quick-snippet',
        component: ManageQuickSnippetComponent,
        children: [
          { path: 'create', component: BuildQuickSnippetComponent },
          { path: 'update/:snippetId', component: BuildQuickSnippetComponent },
          { path: 'snippets', component: AllQuickSnippetComponent },
          { path: '', redirectTo: 'snippets', pathMatch: 'full' }
        ]
      },
      { path: 'tags', component: ManageTagsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
