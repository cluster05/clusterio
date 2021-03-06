import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';

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
import { AdminGuard } from './shared/guards/admin.guard';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard, AdminGuard] },
      {
        path: 'articles',
        component: ManageArticlesComponent,
        canActivate: [AuthGuard, AdminGuard],
        children: [
          { path: 'create', component: BuildArticleComponent },
          { path: 'update/:articleId', component: BuildArticleComponent },
          { path: '', component: AllArticlesComponent },
        ]
      },
      {
        path: 'quick-snippet',
        component: ManageQuickSnippetComponent,
        canActivate: [AuthGuard, AdminGuard],
        children: [
          { path: 'create', component: BuildQuickSnippetComponent },
          { path: 'update/:snippetId', component: BuildQuickSnippetComponent },
          { path: 'snippets', component: AllQuickSnippetComponent },
          { path: '', redirectTo: 'snippets', pathMatch: 'full' }
        ]
      },
      { path: 'tags', component: ManageTagsComponent, canActivate: [AuthGuard, AdminGuard] },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
