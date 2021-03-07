import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllArticlesComponent } from './components/manage-articles/all-articles/all-articles.component';
import { BuildArticleComponent } from './components/manage-articles/build-article/build-article.component';
import { ManageArticlesComponent } from './components/manage-articles/manage-articles.component';
import { ManageTagsComponent } from './components/manage-tags/manage-tags.component';
import { AdminGuard } from './shared/guards/admin.guard';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
      {
        path: 'post',
        component: ManageArticlesComponent,
        canActivate: [AdminGuard],
        children: [
          { path: 'create', component: BuildArticleComponent },
          { path: 'update/:articleId', component: BuildArticleComponent },
          { path: '', component: AllArticlesComponent },
        ]
      },
      { path: 'tags', component: ManageTagsComponent, canActivate: [AdminGuard] },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
