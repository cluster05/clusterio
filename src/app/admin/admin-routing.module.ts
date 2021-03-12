import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllPostComponent } from './components/manage-post/all-post/all-post.component';
import { ManagePostsComponent } from './components/manage-post/manage-post.component';
import { ManageTagsComponent } from './components/manage-tags/manage-tags.component';
import { AdminViewPostComponent } from './shared/components/admin-view-post/admin-view-post.component';
import { BuildPostComponent } from './shared/components/build-post/build-post.component';
import { AdminGuard } from './shared/guards/admin.guard';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
      {
        path: 'posts',
        component: ManagePostsComponent,
        canActivate: [AdminGuard],
        children: [
          { path: 'create', component: BuildPostComponent },
          { path: 'update/:postId', component: BuildPostComponent },
          { path: 'view/:postId', component: AdminViewPostComponent },
          { path: '', component: AllPostComponent },
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
