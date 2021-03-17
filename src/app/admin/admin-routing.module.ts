import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllCoursesComponent } from './components/manage-course/all-courses/all-courses.component';
import { CreateCourseComponent } from './components/manage-course/create-course/create-course.component';
import { ManageCourseArticlesComponent } from './components/manage-course/manage-course-articles/manage-course-articles.component';
import { ManageCourseComponent } from './components/manage-course/manage-course.component';
import { AllPostComponent } from './components/manage-post/all-post/all-post.component';
import { BuildPostExtracterComponent } from './components/manage-post/build-post-extracter/build-post-extracter.component';
import { ManagePostsComponent } from './components/manage-post/manage-post.component';
import { ManageTagsComponent } from './components/manage-tags/manage-tags.component';
import { AdminViewPostComponent } from './shared/components/admin-view-post/admin-view-post.component';
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
          { path: 'create', component: BuildPostExtracterComponent },
          { path: 'update/:postId', component: BuildPostExtracterComponent },
          { path: 'view/:postId', component: AdminViewPostComponent },
          { path: '', component: AllPostComponent },
        ]
      },
      { path: 'tags', component: ManageTagsComponent, canActivate: [AdminGuard] },
      {
        path: 'courses',
        component: ManageCourseComponent,
        canActivate: [AdminGuard],
        children: [
          { path: 'create', component: CreateCourseComponent },
          { path: 'manage', component: ManageCourseArticlesComponent },
          { path: '', component: AllCoursesComponent },
        ]

      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
