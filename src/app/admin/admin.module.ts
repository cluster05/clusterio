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
import { BuildPostManageTagsComponent } from './shared/components/build-post/build-post-manage-tags/build-post-manage-tags.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleArticleComponent } from './shared/components/single-article/single-article.component';
import { SingleSnippetComponent } from './shared/components/single-snippet/single-snippet.component';
import { AdminViewPostComponent } from './shared/components/admin-view-post/admin-view-post.component';
import { ManagePostsComponent } from './components/manage-post/manage-post.component';
import { AllPostComponent } from './components/manage-post/all-post/all-post.component';
import { BuildPostComponent } from './shared/components/build-post/build-post.component';
import { BuildPostExtracterComponent } from './components/manage-post/build-post-extracter/build-post-extracter.component';
import { BuildPostPreviewComponent } from './shared/components/build-post/build-post-preview/build-post-preview.component';
import { UploadPostImageComponent } from './shared/components/build-post/upload-post-image/upload-post-image.component';
import { ManageCourseComponent } from './components/manage-course/manage-course.component';
import { AllCoursesComponent } from './components/manage-course/all-courses/all-courses.component';
import { CreateCourseComponent } from './components/manage-course/create-course/create-course.component';
import { ManageCourseArticlesComponent } from './components/manage-course/manage-course-articles/manage-course-articles.component';


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
    BuildPostManageTagsComponent,
    AllPostComponent,
    BuildPostComponent,
    BuildPostExtracterComponent,
    SingleArticleComponent,
    SingleSnippetComponent,
    AdminViewPostComponent,
    BuildPostPreviewComponent,
    UploadPostImageComponent,
    ManageCourseComponent,
    AllCoursesComponent,
    CreateCourseComponent,
    ManageCourseArticlesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ]
})
export class AdminModule { }
